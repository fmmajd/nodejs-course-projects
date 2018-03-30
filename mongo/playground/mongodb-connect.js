const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost", (err, client) => {
	if (err) {
		console.log("unable to connect to mongodb server.");
	}
	console.log("connected to mongodb server.");

	const db = client.db("TodoApp");

	// add a To-Do
	// db.collection("Todos").insertOne(
	// 	{
	// 		title: "first title here",
	// 		text: "do grocery"
	// 	},
	// 	(err, res) => {
	// 		if (err) {
	// 			return console.log("unable to insert to-do", err);
	// 		}
	// 		console.log(JSON.stringify(res.ops, undefined, 2));
	// 	}
	// );

	// add a user
	db.collection("Users").insertOne(
		{
			name: "Majd",
			age: 24,
			location: "Chaloos"
		},
		(err, res) => {
			if (err) {
				return console.log("unable to insert user", err);
			}
			// console.log(JSON.stringify(res.ops, undefined, 2));
			console.log(res.ops[0]._id.getTimestamp());
		}
	);

	client.close();
});
