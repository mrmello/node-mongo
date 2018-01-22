var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('Hello World')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT);
