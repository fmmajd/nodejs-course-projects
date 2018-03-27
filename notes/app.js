console.log('starting the notes app');

const fs = require('fs');
const os = require('os');

const _ = require('lodash');

// const notes = require('./notes');

// let user_info = os.userInfo();
// fs.appendFileSync('greetings.txt', `Hello ${user_info.username} !`);
// console.dir(user_info);

console.log(process.argv);
let args = _.drop(process.argv, 2);
console.log(args);

let command = args[0];
console.log(`Command: ${command}`);

switch (command) {
	case 'add':
		console.log('adding a new note');
		break;
	case 'remove':
		console.log('removeing a note');
		break;
	case 'list':
		console.log('listing all notes');
		break;
	case 'read':
		console.log('fetching a note');
		break;
	default:
		console.log('command not recognized');
		break;
}
