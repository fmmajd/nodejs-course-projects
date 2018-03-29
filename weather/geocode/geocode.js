const request = require("request");

let geocodeAddress = (address, callback) => {
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
			if (error) {
				callback("unable to access google servers.");
			} else if (body.status === "ZERO_RESULTS") {
				callback("address not found");
			} else if (body.status === "OK") {
				let location = body.results[0].geometry.location;
				let { lat, lng } = location;
				console.log(`lat: ${lat}`);
				console.log(`lng: ${lng}`);
				callback(undefined, location);
			}
		}
	);
};

module.exports = {
	geocodeAddress
};
