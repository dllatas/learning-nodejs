
var express = require("express");

var app = express();

var myApp = {};

myApp.welcome = function (req, res) {
    "use strict";
    res.send("Hello World!!!");
};

myApp.getInfo = function (req, res) {
    "use strict";
    if (req.params.id) {
        res.send("Welcome " + req.params.id);
    } else {
        res.send("gg");
    }
};

app.get("/", myApp.welcome);

app.get("/:id?", myApp.getInfo);

app.listen(9001);