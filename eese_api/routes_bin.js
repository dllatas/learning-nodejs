"use strict";

var _env_bin = require("./models/env_bin.js");

var _env_bin2 = _interopRequireDefault(_env_bin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    configure: function configure(app) {
        app.get("/eese/", function (req, res) {
            _env_bin2.default.get(res);
        });
    }
};
