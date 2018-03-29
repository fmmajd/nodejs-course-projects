let somePromise = new Promise((resolve, reject) => {
	resolve("Hey! it worked.");
});

somePromise.then(msg => {
	console.log("success: " + msg);
});
