var http = require("http"),
    assert = require("assert");

var opts = {
    host: "localhost",
    port: 8000,
    path: "/send",
    method: "POST",
    headers: {"content-type": "application/x-www-form-urlencoded"}
};

var req = http.request(opts, function (res) {
    "use strict";
    var data = "";
    res.setEncoding("utf8");
    res.on("data", function (d) {
        data += d;
    });
    res.on("end", function () {
        assert.strictEqual(data, '{"status":"ok","message":"tweet received"}');
    });
});

req.write("tweet=test");
req.end();