const { MongoClient } = require("mongodb");

MongoClient.connect("mongodb://localhost", (err, client) => {
	if (err) {
		console.log("unable to connect to mongodb server.");
	}
	console.log("connected to mongodb server.");

	const db = client.db("TodoApp");

	const Todos = db.collection("Todos");

	Todos.find({
		completed: true
	})
		.toArray()
		.then(
			docs => {
				console.log("Todos:");
				console.log(JSON.stringify(docs, undefined, 2));
			},
			err => {
				console.log("unable to fetch to-dos. ", err);
			}
		);

	Todos.find({
		completed: true
	})
		.count()
		.then(
			count => {
				console.log("count:");
				console.log(count);
			},
			err => {
				console.log("unable to fetch to-dos. ", err);
			}
		);

	client.close();
});
