const express = require('express')
const bodyParser = require('body-parser')
//const mongoose = require('mongoose');
//const keys = require('./config/keys');
//require('./models/Book');
const app = express()

// mongoose.connect(keys.mongoURI)
//   .catch(err => {console.log('cannot connect ' + err)});
//
// const Book = mongoose.model('books');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/books', function (req, res) {

  const json = [
    {
      id: '001',
      title:  'Getting started with react',
      author: 'Marcos Mello',
      pages:  '289'
    },
    {
      id: '002',
      title:  'Ruby: the gem',
      author: 'Dyan Carra',
      pages:  '104'
    },
    {
      id: '003',
      title:  'The Android master',
      author: 'Alvondi J.',
      pages:  '320'
    }];
  res.send(json);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT);
