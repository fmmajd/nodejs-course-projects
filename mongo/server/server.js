const { mongoose } = require("./db/mongoose");

const { User, Todo } = require("./models");

let new_todo = new Todo({
	text: "clean the room"
});

new_todo.save().then(
	doc => {
		console.log("saved");
		console.log(doc);
	},
	err => {
		console.log("error");
	}
);
