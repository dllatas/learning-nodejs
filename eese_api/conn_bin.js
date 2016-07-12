"use strict";

var _mysql = require("mysql");

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Connection() {
    this.pool = null;

    this.init = function () {
        this.pool = _mysql2.default.createPool({
            host: "walle",
            user: "eese",
            password: "M3t4!3php",
            database: "ILO"
        });
    };

    this.acquire = function (callback) {
        this.pool.getConnection(function (err, connection) {
            callback(err, connection);
        });
    };
}

module.exports = new Connection();
