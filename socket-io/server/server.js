const path = require('path');

const publicPath = path.join(__dirname, '../public')

// console.log(publicPath)

const express = require('express')
const app = express()

const port = process.env.PORT || 3001;

app.use(express.static(publicPath));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`app is listening on port ${port}!`))