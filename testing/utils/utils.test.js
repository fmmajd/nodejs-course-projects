const expect = require("expect");

const utils = require("./utils");

it("should add two numbers", () => {
	let res = utils.add(310, -192);
	expect(res).toBe(118);
	// if (res !== 7) throw new Error(`expected 7, got ${res}!`);
});

it("should square a number", () => {
	let res = utils.square(25);
	expect(res).toBe(625);
	// if (res !== 9) throw new Error(`expected 9, got ${res}!`);
});
