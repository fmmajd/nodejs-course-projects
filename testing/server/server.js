const express = require("express");

let app = express();

app.get("/", (req, res) => {
	return res.send("Hello World!");
});

app.listen(1372);
