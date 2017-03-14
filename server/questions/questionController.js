var Q = require('q');
var Question = require('./questionModel');

// Promisifying mongoose methods
var findAllQuestions = Q.nbind(Question.find, Question);
//var findQuestionsNotAnswered = Q.nbind(Question.find, Question);

module.exports = {
  getAllQuestions: function(req, res, next) {
    findAllQuestions({})
      .then(function(questions) {
        res.json(questions);
      })
      .fail(function(err) {
        next(err);
      });
  }
};
