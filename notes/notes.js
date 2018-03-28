// console.log('inside the notes module');

let add = (title, text) => {
	console.log("adding a note", title, text);
};

let list = () => {
	console.log("listing all the notes");
};

let fetch = title => {
	console.log("fetching note: " + title);
};

let remove = title => {
	console.log("removing note: " + title);
};

module.exports = {
	add,
	list,
	fetch,
	remove
};
