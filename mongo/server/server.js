// const { mongoose } = require("./db/mongoose");
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
			res.send(doc);
		},
		err => {
			res.status(400).send(err);
		}
	);
});

app.listen(1372, () => {
	console.log("started on port 1372.");
});
