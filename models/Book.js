const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  id:     String,
  title:  String,
  author: String,
  pages:  String
});

mongoose.model('books', bookSchema);
