console.log('inside the notes module');

module.exports.age = 24.5;

module.exports.addNote = () => {
	console.log('adding a note');
	return 'New Note Added.';
};

console.log(module);
