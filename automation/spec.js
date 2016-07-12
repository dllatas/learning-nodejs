var main = require("./main.js");

describe("window height", function() {
	it("return window height", function() {
		expect(main.getWindowHeight()).toEqual(jasmine.any(Number));
	});
});