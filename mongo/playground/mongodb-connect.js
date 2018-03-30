const MongoClient = require("mongodb");

MongoClient.connect("mongodb://localhost", (err, client) => {
	if (err) {
		console.log("unable to connect to mongodb server.");
	}
	console.log("connected to mongodb server.");

	const db = client.db("TodoApp");

	db.collection("Todos").insertOne(
		{
			title: "first title here",
			text: "do grocery"
		},
		(err, res) => {
			if (err) {
				return console.log("unable to insert to-do", err);
			}
			console.log(JSON.stringify(res.ops, undefined, 2));
		}
	);

	db.collection("Users").insertOne(
		{
			name: "Fatemeh",
			age: 24,
			location: "Tehran"
		},
		(err, res) => {
			if (err) {
				return console.log("unable to insert user", err);
			}
			console.log(JSON.stringify(res.ops, undefined, 2));
		}
	);

	client.close();
});
