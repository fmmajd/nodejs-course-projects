const path = require('path');

const express = require('express')
const app = express()
const socketIO = require('socket.io')
const http = require('http')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3001;

let server = http.createServer(app);
let io = socketIO(server);

io.on('connection', (socket) => {
	console.log('new user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected.');
	})
});

app.use(express.static(publicPath));

// app.get('/', (req, res) => res.send('Hello World!'))

server.listen(port, () => console.log(`app is listening on port ${port}!`))