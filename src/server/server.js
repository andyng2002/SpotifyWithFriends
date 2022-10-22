//const express = require('express');
import express from "express";
const router = express.Router();
const app = express();
const port = 8888;


var SpotifyWebApi = require('spotify-web-api-node');
let scopes = ['playlist-modify-private', 'playlist-modify-public', 'user-top-read', 'user-read-email', 'ugc-image-upload'];

var spotifyApi = new SpotifyWebApi({
    clientId: 'e2d4a4b1eedf493f86413b3a31892213',
    clientSecret: '5344d40306da4d828c551eacd9bb2ad0',
    redirectUri: 'http%3A%2F%2Flocalhost%3A8080%2F' // set later
});

app.listen(port, () => {
    console.log("App is listening");
});

router.get('/', (req, res) => {
    /*res.send(
        /!*"<a href='https://accounts.spotify.com/authorize?client_id=" + e2d4a4b1eedf493f86413b3a31892213 +
        "&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&scope=user-top-read'>Sign in</a>"*!/
        "Hello Pie!"
    );*/
    var html = spotifyApi.createAuthorizeURL(scopes) + "&show_dialog=true"
    console.log(html)
    res.send("<a href='" + html + "'> Sign In </a>")
});

app.use(router);

//module.exports = router;

