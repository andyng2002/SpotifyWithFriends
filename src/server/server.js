//const express = require('express');
import express from "express";
import cors from "cors";
const router = express.Router();
const app = express();
const port = process.env.port || 8888;
const mongoose = require("mongoose")
const uri = "mongodb+srv://kaaat:TO137mvUujxmpttl@cluster0.alisctt.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(error)
    }
}

connect();

var SpotifyWebApi = require('spotify-web-api-node');
let scopes = ['playlist-modify-private', 'playlist-modify-public', 'user-top-read', 'user-read-email', 'ugc-image-upload'];

var spotifyApi = new SpotifyWebApi({
    clientId: 'e2d4a4b1eedf493f86413b3a31892213',
    clientSecret: '5344d40306da4d828c551eacd9bb2ad0',
    redirectUri: 'http%3A%2F%2Flocalhost%3A8080%2F' // set later
});

app.use(cors())

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/clicked', cors(), (req, res) => {
    var html = spotifyApi.createAuthorizeURL(scopes) + "&show_dialog=true"
    res.send(html);
});

app.use(router);

//module.exports = router;

