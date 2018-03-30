const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/TodoApp");

let Todo = mongoose.model("Todo", {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAT: {
		type: Number,
		default: null
	}
});

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

let new_todo = new Todo({
	text: "buy dresses"
	// completed: false
});

// new_todo.save().then(
// 	doc => {
// 		console.log("saved to-do: ", doc);
// 	},
// 	err => {
// 		console.log("unable to save new to-do");
// 	}
// );

let new_user = new User({
	name: "fafa",
	email: "fafa@fafa.com"
});

new_user.save().then(
	doc => {
		console.log("saved user: ", doc);
	},
	err => {
		console.log("unable to save new user");
		console.log(err);
	}
);
