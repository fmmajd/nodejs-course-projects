const mongoose = require("mongoose");

let User = mongoose.model("User", {
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number
	},
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
});

module.exports = User;
