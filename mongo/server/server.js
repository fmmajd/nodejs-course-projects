const { mongoose } = require("./db/mongoose");
let express = require("express");
let bodyParser = require("body-parser");

const { Todo } = require("./models");

let app = express();

// middleware
app.use(bodyParser.json());

app.post("/todos", (req, res) => {
	let newTodo = new Todo({
		text: req.body.text
	});

	newTodo.save().then(
		doc => {
			res.status(201).send(doc);
		},
		err => {
			res.status(400).send(err);
		}
	);
});

app.delete("/todos", (req, res) => {
	Todo.remove({}).then(data => {
		res.send(data);
	});
});

let port = 1372;
app.listen(port, () => {
	console.log(`started on port ${port}.`);
});

module.exports = {
	app
};
