"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _conn_bin = require("./conn_bin");

var _conn_bin2 = _interopRequireDefault(_conn_bin);

var _routes_bin = require("./routes_bin");

var _routes_bin2 = _interopRequireDefault(_routes_bin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

var reply = function reply() {
  return console.log("Server listening on port " + server.address().port);
};

_conn_bin2.default.init();
_routes_bin2.default.configure(app);

var server = app.listen(8000, reply);
