var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
  choice1: String,
  choice2: String
});

module.exports = mongoose.model('Question', questionSchema);