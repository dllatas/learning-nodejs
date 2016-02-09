var net = require("net");
var chatServer = net.createServer(),
    clientList = [];

var broadcast = {};

broadcast.send = function (client, data) {
    "use strict";
    var i = 0, cleanup = [];
    for (i = 0; i < clientList.length; i += 1) {
        if (client !== clientList[i]) {
            if (clientList[i].writable) {
                clientList[i].write(client.remotePort + ":" + data);
            } else {
                cleanup.push(clientList[i]);
                clientList[i].destroy();
            }
        }
    }
    broadcast.cleanup(cleanup);
};

broadcast.shutdown = function (client) {
    "use strict";
    clientList.splice(clientList.indexOf(client), 1);
};

broadcast.cleanup = function (cleanup) {
    "use strict";
    var i = 0;
    for (i = 0; i < cleanup.length; i += 1) {
        clientList.splice(clientList.indexOf(cleanup[i]), 1);
    }
};

chatServer.on("connection", function (client) {
    "use strict";
    clientList.push(client);
    // Events inside event
    client.on("data", function (data) {
        broadcast.send(client, data);
    });
    client.on("end", function (client) {
        broadcast.shutdown(client);
    });
    client.on("error", function (e) {
        console.log(e);
    });
}).listen(9000);