const mongoose = require("./../server/db/mongoose");
const { Todo } = require("./../server/models");

const id = "5ac3c21c91eaaa624e73790a";

Todo.findById(id).then(
	todos => {
		console.log(todos);
	},
	e => {
		console.log(e);
	}
);

Todo.findOne({
	_id: id
}).then(
	todos => {
		console.log(todos);
	},
	e => {
		console.log(e);
	}
);
