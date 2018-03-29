const express = require("express");
const hbs = require("hbs");

let app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getCurrentYear", () => {
	return new Date().getFullYear();
});
hbs.registerHelper("screamIt", text => {
	return text.toUpperCase();
});

app.get("/", (req, res) => {
	res.render("home.hbs", {
		pageTitle: "Homepage",
		welcomeMsg: "welcome dear!"
	});
});

app.get("/about", (req, res) => {
	res.render("about.hbs", {
		pageTitle: "About Us Page",
		date: new Date().getFullYear()
	});
});

app.listen(1372);
