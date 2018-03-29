const request = require("request");

let getWeather = (
	{ lng, lat } = {
		lat: 37.8267,
		lng: -122.4233
	},
	callback
) => {
	let api_key = "e9355aff2961aa5b9fe2dda50558d511";
	let url = `https://api.darksky.net/forecast/${api_key}/${lat},${lng}?units=si`;

	request(
		{
			url,
			json: true
		},
		(error, response, body) => {
			if (!error && response.statusCode === 200) {
				callback(undefined, body.currently);
			} else {
				callback("unable to fetch weather.");
			}
		}
	);
};

module.exports = {
	getWeather
};
