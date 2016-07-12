import mysql from "mysql"

function Connection() {
    this.pool = null;

    this.init = function() {
        this.pool = mysql.createPool({
            host: "walle",
            user: "eese",
            password: "M3t4!3php",
            database: "ILO"
        });
    };

    this.acquire = function(callback) {
        this.pool.getConnection(function(err, connection) {
            callback(err, connection);
        });
    };
}

module.exports = new Connection();
