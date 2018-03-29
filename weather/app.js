const request = require("request");
const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require("./geocode/weather");

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

geocode.geocodeAddress(argv.address, (error, result) => {
	if (error) {
		console.log(error);
	} else if (result) {
		let { location } = result;
		weather.getWeather(location, (error, result) => {
			if (error) {
				console.log(error);
			} else if (result) {
				let { summary, temperature } = result;

				console.log(`summary: ${summary} \ntemp: ${temperature}`);
			} else {
				console.log("something went wrong.");
			}
		});
	}
});

// weather.getWeather({
// 	lat: 37.8267,
// 	lng: -122.4233
// });
