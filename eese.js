var redis = require("redis"),
  client = redis.createClient();

function EESE() {
    var environment = "SELECT * FROM ENVIRONMENT";
    return {
        retrieve: function(err, rows, fields) {
            if (err) throw err;
            client.set(fields[0].table, JSON.stringify(rows));
        }
    }
}

module.exports = EESE();
