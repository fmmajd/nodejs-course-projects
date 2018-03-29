const request = require("request");
const yargs = require("yargs");

const geocode = require("./geocode/geocode");

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
		console.log(result);
	}
});
