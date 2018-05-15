const path = require('path');

const publicPath = path.join(__dirname, '../public')

// console.log(publicPath)

const express = require('express')
const app = express()

app.use(express.static(publicPath));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))