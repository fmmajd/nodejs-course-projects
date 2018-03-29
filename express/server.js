const express = require("express");
const hbs = require("hbs");

const fs = require("fs");

let app = express();

const is_maintenance = false;

app.set("view engine", "hbs");

// log middleware
app.use((req, res, next) => {
	let now = new Date().toString();
	let log = `${now}: ${req.method} ${req.url}`;
	console.log(log);
	fs.appendFileSync("log.txt", log + "\n");
	next();
});
// maintenance middleware
app.use((req, res, next) => {
	if (is_maintenance) {
		res.render("maintenance.hbs", {
			pageTitle: "maintenance"
		});
	} else {
		next();
	}
});
// static file server middleware
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

let port = process.env.PORT || 1372;
app.listen(port, () => {
	console.log("server is up at port: " + port);
});
