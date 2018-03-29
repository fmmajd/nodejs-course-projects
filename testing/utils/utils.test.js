const utils = require("./utils");

it("should add two numbers", () => {
	let res = utils.add(3, 4);
	if (res !== 7) throw new Error("oopsi");
});
