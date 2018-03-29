const request = require("request");

let url = "https://maps.googleapis.com/maps/api/geocode/json?address=tehran";
let api_key = "AIzaSyBjHXw7LY_Ydb1YPQoC6_ou8giQ9SUi9B0";
url = url + "&key=" + api_key;

request(
	{
		url,
		json: true
	},
	(error, response, body) => {
		console.log(JSON.stringify(response, undefined, 2));
		let location = body.results[0].geometry.location;
		let { lat, lng } = location;
		console.log(lat);
		console.log(lng);
	}
);
