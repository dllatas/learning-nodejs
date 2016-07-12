var http = require("http");
var server = http.createServer();
var hello = {};

hello.welcome = function (req, res) {
    "use strict";
    console.log(req);
    res.writeHead(200, {});
    res.end("Hello world!!");
};


server.on("request", hello.welcome);


server.listen(8215);