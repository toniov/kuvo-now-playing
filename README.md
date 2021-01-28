# Kuvo Now Playing

Command line tool that displays current track in a Kuvo live playlist. To be used as a browser source in OBS.

## How to use

Run the app:

```
node index.js
```

This will start a local server in localhost:3000. You need to pass the KUVO playlist ID as a query string (e.g.: http://localhost:3000/?playlistID=123456).

## Notes

This only makes sense for live playlists, also, please note that once the live playlist is over, KUVO changes the order of the playlist, so the last track will become the first.
