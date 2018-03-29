const utils = require("./utils");

it("should add two numbers", () => {
	let res = utils.add(3, 4);
	if (res !== 7) throw new Error(`expected 7, got ${res}!`);
});

it("should square a number", () => {
	let res = utils.square(3);
	if (res !== 9) throw new Error(`expected 9, got ${res}!`);
});
