//const express = require('express');
import express from "express";
import cors from "cors";
import axios from 'axios';
import queryString from "query-string";
import {authorizationCodeGrant} from "spotify-web-api-node/src/server-methods";
import bodyParser from "body-parser";
import {request} from "request";

const app = express();
const port = 8888;
const redirectUri = "http://localhost:8888/access"

const port = process.env.port || 8888;
const mongoose = require("mongoose")
const uri = "mongodb+srv://kaaat:TO137mvUujxmpttl@cluster0.alisctt.mongodb.net/?retryWrites=true&w=majority"
const User = require("./User")

async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(error)
    }
}

connect();

run()
async function run() {
    const user = await User.create({email: "example@gmail.com" })
    console.log(user)
}

var SpotifyWebApi = require('spotify-web-api-node');
let scopes = ['playlist-modify-private', 'playlist-modify-public', 'user-top-read', 'user-read-email', 'ugc-image-upload'];

var spotifyApi = new SpotifyWebApi({
    clientId: 'e2d4a4b1eedf493f86413b3a31892213',
    clientSecret: '5344d40306da4d828c551eacd9bb2ad0',
    redirectUri: 'http://localhost:8888/access' // encoded url
});

app.use(
    cors(),
    bodyParser.urlencoded({extended: false}),
    bodyParser.json()
)

app.get('/clicked', cors(), (req, res) => {
    var html = spotifyApi.createAuthorizeURL(scopes) + "&show_dialog=true"
    res.send(html);
});

app.get("/access", cors(), async (req, res) => {
    //const code = req.body.code;
    const code = req.query.code;
    console.log(code);
    /*const clientId = 'e2d4a4b1eedf493f86413b3a31892213';
    const clientSecret = '5344d40306da4d828c551eacd9bb2ad0';*/

    /*const authOptions = {
        url: "https://accounts.spotify.com/api/token",
        body: {
            grant_type: "authorization_code",
            code: "{{code}}",
            redirect_uri: "http%3A%2F%2Flocalhost%3A8080%2F"
        },
        headers: {
            'Authorization': ' Basic' + (new Buffer.from(clientId + ":" + clientSecret).toString('base64')),
            'Content-Type': "application/x-www-form-urlencoded"
        },
        json:true
    }

    request.post(authOptions, function(error,response,body) {
        let token = body.access_token;
        console.log(token);
    })*/

    spotifyApi.authorizationCodeGrant(code).then(
        function(data) {
            console.log('The token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);
            console.log('The refresh token is ' + data.body['refresh_token']);

            // Set the access token on the API object to use it in later calls
            spotifyApi.setAccessToken(data.body['access_token']);
            spotifyApi.setRefreshToken(data.body['refresh_token']);
        },
        function(err) {
            console.log('Something went wrong!', err);
        }
    );

    res.redirect("http://localhost:8080");
    /*console.log(code);
    spotifyApi.authorizationCodeGrant(code).then(
        function(data) {
            console.log("The access token is " + data.body['access_token']);

            spotifyApi.setAccessToken(data.body['access_token']);
        }
    ), function(err) {
        console.log("Could not refresh access token", err);
    }
    res.send("data");*/
    //console.log(spotifyApi.)
})

app.listen(port, () => {
    console.log("App is listening");
});

/*app.get('/account', cors(), async (req, res) => {
    await axios.post(
        "https://accounts.spotify.com/api/token",
        queryString.stringify({
            grant_type: "authorization_code",
            code: req.body.code,
            redirect_uri: 'http%3A%2F%2Flocalhost%3A8080%2F'
        })
    ).then((response) => {
        console.log(response.data);
        console.log("Server Side Works")
        //res.send(response.data);
    }).catch((error) => {
        console.log(error);
    })
    // console.log(spotifyResponse.data);
})*/

/*app.post('/account', (req,res)=>{
    const code = req.body.code;
    spotifyApi.getAccessToken()
})*/



