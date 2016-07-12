/*function Render() {
	console.log("constructor");
}*/ 

var Render = module.exports = function() {
	console.log("constructor");
}

Render.prototype = {
	
	redirect: function(url) {
		return "welcome to " + url +" !!";
	},

	setMessage: function(url) {
		return url + " going down";
	}
}