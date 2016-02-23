var express = require("express");
var bluebird = require("bluebird");
var mysql = require("mysql");
var app = express();

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

var connection = mysql.createConnection({
  host     : 'walle',
  user     : 'eese',
  password : 'M3t4!3php',
  database : 'ILO'
});

connection.query(eese.environment, eese.retrieve);

app.get("/", function(req, res){
    res.send("hello world");
});

app.get("/:id", function(req, res){
    var vContext, vContextOrder, vContextFinal;
    client.getAsync("ENVIRONMENT").then(function(context) {
        // res.send(context);
        vContext = JSON.parse(context);
        vContextOrder = vContext.map(function(context){
            //console.log(context.id + ", " + context.name + ", " + context.abbreviation);
            return context.id + ", " + context.name + ", " + context.abbreviation;
        });
        res.send(vContextOrder.join(";"));
    });
});

app.listen(9001);
