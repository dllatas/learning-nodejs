var express = require("express");
var bodyParser = require("body-parser");
// console.log(express);
var app = express();

app.listen(8000);
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());

var twitter = {};

twitter.tweets = [];

twitter.status = {status: "", message: ""};

twitter.welcome = function (req, res) {
    "use strict";
    res.send("welcome to the void !!");
};

twitter.getStatus = function (req, res) {
    "use strict";
    if (req.body && req.body.tweet) {
        twitter.tweets.push(req.body.tweet);
        res.send(twitter.status("ok", "tweet received"));
    } else {
        res.send(twitter.status("nok", "no tweet received"));
    }
};

twitter.getTweets = function (req, res) {
    "use strict";
    res.send(twitter.tweets);
};


app.get("/", twitter.welcome);

app.post("/send", bodyParser, twitter.getStatus);

app.get("/tweets", twitter.getTweets);