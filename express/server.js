const express = require("express");
const hbs = require("hbs");

let app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	// res.send("Hello World!");
	res.send({
		name: "Fatemeh",
		likes: ["first person", "second person", "that other person"]
	});
});

app.get("/about", (req, res) => {
	res.render("about.hbs", {
		pageTitle: "About Us Page",
		date: new Date().getFullYear()
	});
});

app.listen(1372);
