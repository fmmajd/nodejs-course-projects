const fs = require("fs");

const file_name = "notes-data.json";

let getNotesList = () => {
	let notes = [];
	try {
		let notesData = fs.readFileSync(file_name);
		let notes = JSON.parse(notesData);
	} catch (e) {
		let notes = [];
	}

	return notes;
};

let add = (title, body) => {
	let note = {
		title,
		body
	};

	let notes = getNotesList();

	let duplicate_notes = notes.filter(note => note.title === title);

	if (duplicate_notes.length === 0) {
		notes.push(note);
		fs.writeFileSync(file_name, JSON.stringify(notes));
	}
};

let list = () => {
	let notes = getNotesList();

	console.dir(notes);
};

let fetch = title => {
	let notes = getNotesList();
	console.log("fetching note: " + title);
};

let remove = title => {
	let notes = getNotesList();
	console.log("removing note: " + title);
};

module.exports = {
	add,
	list,
	fetch,
	remove
};
