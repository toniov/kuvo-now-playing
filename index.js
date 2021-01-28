const puppeteer = require('puppeteer');
const $ = require('cheerio');
const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', async (req, res) => {
  const playlistId = req.query.playlistID;
  const url = `https://kuvo.com/playlist/${playlistId}`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const html = await page.content();
  let artist;
  let track;
  $('.tracklist-area', html).each(function() {
    artist = $('.artist', this).first().text();
    track = $('.title', this).first().text();
  });
  await browser.close();
  res.render('index', { artist, track });
});

app.listen(3000)
