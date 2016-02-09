var http = require("http");

/*
var opts = {
    host: "www.google.com",
    port: 80,
    path: "/",
    method: "GET"
};
*/

var opts = {
    host: "www.google.com",
    port: 80,
    path: "/"
};

/*var req = http.request(opts, function (res) {
    "use strict";
    console.log(res);
    res.on("data", function (data) {
        console.log(data);
    });
});*/

var req = http.get(opts, function (res) {
    "use strict";
    //console.log(res);
    res.setEncoding("utf8");
    res.on("data", function (data) {
        console.log(data);
    });
});

//req.end();