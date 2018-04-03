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

app.get("/todos", (req, res) => {
	console.log("here honey");
	Todo.find().then(
		todos => {
			console.log(todos);
			res.send({ todos });
		},
		err => {
			res.status(400).send(err);
		}
	);
});

// app.delete("/todos", (req, res) => {
// 	console.log("here honey");
// 	Todo.remove({}).then(
// 		todos => {
// 			let doc = { todos };
// 			console.log(doc);
// 			res.send({ todos });
// 		},
// 		err => {
// 			res.status(400).send(err);
// 		}
// 	);
// });

let port = 1372;
app.listen(port, () => {
	console.log(`started on port ${port}.`);
});

module.exports = {
	app
};
