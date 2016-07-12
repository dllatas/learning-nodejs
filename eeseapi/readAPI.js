var express = require("express");
var http = require('http');
var request = require('request');
var app = express();

request("http://localhost:8080/api/context", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
     }
});
