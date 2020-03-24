//jshint esversion:9

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const cors = require("cors");
const aylien = require("aylien_textapi");
const bodyParser = require("body-parser");

// Setup empty JS object to act as an endpoint
let projectData = {};

var aylienApi = new aylien({
application_id: process.env.API_ID,
application_key: process.env.API_KEY
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'));
});

app.post('/sentiment', function (req, res){
  aylienApi.sentiment({ url: req.body.url }, (error, response) => {
    if (error === null) {
      // projectData["polarity"] = response.polarity;
      // projectData["subjectivity"] = response.subjectivity;
      // projectData["text"] = response.text;

      projectData = {
        "polarity": response.polarity,
        "subjectivity": response.subjectivity,
        "text": response.text
      };
      res.send(projectData);
      console.log(projectData);
    } else {
      console.log(error, "Error");
    }
  });
});

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT || 8080, function () {
    console.log('Example app listening on port 8080!');
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});
