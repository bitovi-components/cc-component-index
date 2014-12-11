import can from "can";

// Install and import your preferred assertion library here.
// import "assert";

import "../cc-hello-world";

import template from "./test.stache!";

describe("cc-hello-world", function() {
	afterEach(function() {
		can.$("#test-area").empty();
	});
	it("works", function() {
		can.$("#test-area").html(template());
		if (!can.$("cc-hello-world").text() === "Hello World!") {
			throw new Error("fail");
		}
	});
});
