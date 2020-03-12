//jshint esversion:9

const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const aylien = require("aylien_textapi");

dotenv.config();

var aylienapi = new aylien({
application_id: process.env.API_ID,
application_key: process.env.API_KEY
});

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'));
});

app.post('/sentiment', function (req, res){
  const url = req.body.url;
  aylienapi.sentiment({url: url}, function(error, response){
    if(error === null){
      console.log(response);
    }
  });
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});
