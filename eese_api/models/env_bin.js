"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Environment = Environment;

var _conn_bin = require("../conn_bin");

var _conn_bin2 = _interopRequireDefault(_conn_bin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Environment() {
    this.get = function (res) {
        _conn_bin2.default.acquire(function (err, con) {
            var statement = "select * from ENVIRONMENT";
            var response = function response(err, result) {
                con.release();
                res.send(result);
            };
            con.query(statement, response);
        });
    };
}
