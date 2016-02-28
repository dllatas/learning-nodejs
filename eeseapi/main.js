var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
var eese = require("./eese.js");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host     : 'walle',
  user     : 'eese',
  password : 'M3t4!3php',
  database : 'ILO'
});

var port = process.env.PORT || 8080;

// Route section
var router = express.Router();

router.use(function(req, res, next) {
    console.log("yo! what's up??");
    next();
});

router.get("/", function(req, res) {
    res.json({mesasge: "api here, homez !"});
});

router.route("/context").get( function(req, res){
    retrieveRows = function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    };
    connection.query(eese.findAllContext(), retrieveRows);
});

router.route("/context/:id").get( function(req, res){
    retrieveRows = function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    };
    connection.query(eese.findOneContext(req.params.id), retrieveRows);
});

router.route("/pillar").get(function(req, res) {
    retrieveRows = function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    };
    connection.query(eese.findAllPillar(), retrieveRows);
});

router.route("/pillar/:context&&:id").get(function(req, res) {
    retrieveRows = function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    };
    connection.query(eese.findOnePillar(req.params.context,req.params.id), retrieveRows);
});

router.route("/source").get(function(req, res) {
    retrieveRows = function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    };
    connection.query(eese.findAllSource(), retrieveRows);
});

router.route("/source/:id").get(function(req, res) {
    retrieveRows = function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    };
    connection.query(eese.findOneSource(req.params.id), retrieveRows);
});

router.route("/region").get(function(req, res) {
    retrieveRows = function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    };
    connection.query(eese.findAllRegion(), retrieveRows);
});

router.route("/region/:id").get(function(req, res) {
    retrieveRows = function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    };
    connection.query(eese.findOneRegion(req.params.id), retrieveRows);
});

router.route("/country").get(function(req, res) {
    retrieveRows = function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    };
    connection.query(eese.findAllCountry(), retrieveRows);
});

router.route("/country/:id").get(function(req, res) {
    retrieveRows = function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    };
    connection.query(eese.findOneCountry(req.params.id), retrieveRows);
});

// Route register section
app.use("/api", router);

app.listen(port);
console.log("running trough da " + port);
