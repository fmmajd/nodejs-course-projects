console.log("starting the notes app");

// const fs = require("fs");
// const os = require("os");

const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

// let user_info = os.userInfo();
// fs.appendFileSync('greetings.txt', `Hello ${user_info.username} !`);
// console.dir(user_info);

let args = yargs.argv;

let command = args._[0];
console.log(`Command: ${command}`);

switch (command) {
	case "add":
		notes.add(args.title, args.body);
		break;
	case "remove":
		notes.remove(args.title);
		break;
	case "list":
		notes.list();
		break;
	case "read":
		notes.fetch(args.title);
		break;
	default:
		console.log("command not recognized");
		break;
}
