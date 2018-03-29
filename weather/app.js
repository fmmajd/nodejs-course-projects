const request = require("request");
const yargs = require("yargs");

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: "address",
			describe: "address to fetch weather data",
			string: true,
			default: "tehran"
		}
	})
	.help()
	.alias("help", "h").argv;

const address = argv.address;
let api_key = "AIzaSyBjHXw7LY_Ydb1YPQoC6_ou8giQ9SUi9B0";
let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
	address
)}&key=${api_key}`;

console.log(`url: ${url}`);

request(
	{
		url,
		json: true
	},
	(error, response, body) => {
		// console.log(JSON.stringify(response, undefined, 2));
		// console.log(JSON.stringify(body, undefined, 2));
		if (error) {
			console.log("unable to access google servers.");
		} else if (body.status === "ZERO_RESULTS") {
			console.log("address not found");
		} else if (body.status === "OK") {
			let location = body.results[0].geometry.location;
			let { lat, lng } = location;
			console.log(`lat: ${lat}`);
			console.log(`lng: ${lng}`);
		}
	}
);
