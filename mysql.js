var mysql = require('mysql');

var redis = require("redis"),
    client = redis.createClient();

var connection = mysql.createConnection({
  host     : 'walle',
  user     : 'eese',
  password : 'M3t4!3php',
  database : 'ILO'
});

var sql = {}, source = {};

sql.environment = "SELECT * FROM ENVIRONMENT";
sql.source = "SELECT * FROM SOURCE";
sql.country = "SELECT * FROM COUNTRY";

sql.print = function(err, rows, fields) {
  if (err) throw err;
  console.log(rows);
}

sql.store = function(err, rows, fields) {
  if (err) throw err;

  req.session.source = rows;
  /*source.rows = rows;
  source.fields = fields;*/
  //console.log(source.fields);
}

connection.connect();
//connection.query(sql.environment, sql.print);
connection.query(sql.source, sql.store);
//connection.query(sql.country, sql.print);
connection.end();

console.log(req.session.source);
