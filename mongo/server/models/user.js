const mongoose = require("mongoose");
const validator = require("validator");

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
		minlength: 1,
		unique: true,
		validate: {
			validator: validator.isEmail,
			message: `{VALUE} is not a valid email`
		}
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	},
	tokens: [
		{
			access: {
				type: String,
				required: true
			},
			token: {
				type: String,
				required: true
			}
		}
	]
});

module.exports = User;
