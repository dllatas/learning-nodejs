var mysql = require('mysql');
var redis = require("redis"),
  client = redis.createClient();

var connection = mysql.createConnection({
  host     : 'walle',
  user     : 'eese',
  password : 'M3t4!3php',
  database : 'ILO'
});

var sql = {};

sql.environment = "SELECT * FROM ENVIRONMENT";
sql.pillar = "SELECT * FROM PILLAR";
sql.source = "SELECT * FROM SOURCE";
sql.indicator = "SELECT * FROM INDICATOR";
sql.region = "SELECT * FROM REGION";
sql.country = "SELECT * FROM COUNTRY";

sql.print = function(err, rows, fields) {
    if (err) throw err;
    console.log(rows);
    console.log(fields[0].table);
}

sql.store = function(err, rows, fields) {
    if (err) throw err;
    client.set(fields[0].table, JSON.stringify(rows), redis.print);
    sql.retrieve(fields[0].table);
}

sql.retrieve = function(key) {
    client.get(key, function(err, reply) {
        console.log(JSON.parse(reply));
    });
    //client.quit();
}

client.on("error", function (err) {
    console.log(err);
});

connection.connect();
/*connection.query(sql.environment, sql.store);
connection.query(sql.pillar, sql.store);
connection.query(sql.source, sql.store);*/
//connection.query(sql.indicator, sql.store);
connection.query(sql.region, sql.store);
//connection.query(sql.country, sql.store);
connection.end();
