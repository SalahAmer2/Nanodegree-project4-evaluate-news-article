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
// Setup empty JS object to act as an endpoint
let projectData = {};

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'));
});

app.post('/sentiment', function (req, res){
  const urlUser = req.body.url;
  aylienapi.sentiment({ url: urlUser }, (error, response) => {
    if (error === null) {
      projectData["polarity"] = response.polarity;
      projectData["subjectivity"] = response.subjectivity;
      projectData["text"] = response.text;

      res.send(projectData);
      console.log(projectData);
    } else {
      console.log(error, "Error");
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
