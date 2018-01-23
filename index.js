const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Book');
const app = express()

mongoose.connect(keys.mongoURI)
  .catch(err => {console.log('cannot connect ' + err)});

const Book = mongoose.model('books');

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {

  new Book({
    id: '001',
    title:  'First Book Of Shelf',
    author: 'Marcos Mello',
    pages:  '289'
  }).save()
    .catch(err => {
      res.send(err);
    })
    .then(book => {
      res.send(book);
    })


  res.send('eeitaa')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT);
