var http = require('http');
var myModule = require('./myModule.js');
var MyModuleClass = require('./myModuleClass.js');
var myModuleClass = new MyModuleClass();

var server = http.createServer(function (req, res) {
	// Request
	console.log(req.headers);
	// Response
	// res.setHeader("AppId","metAleph");
	res.write(myModule.redirect(req.url));
	res.write(myModuleClass.redirect(req.url));
	res.write(myModuleClass.setMessage(req.url));
	res.end();
});

server.listen(8084);
console.log("Server is running trough the SIX!!!");