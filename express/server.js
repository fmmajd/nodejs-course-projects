const express = require("express");

let app = express();

app.get("/", (req, res) => {
	// res.send("Hello World!");
	res.send({
		name: "Fatemeh",
		likes: ["first person", "second person", "that other person"]
	});
});

app.listen(1372);
