var Q = require('q');
var Question = require('./questionModel');

// Promisifying mongoose methods
var findAllQuestions = Q.nbind(Question.find, Question);
//var findQuestionsNotAnswered = Q.nbind(Question.find, Question);
var createQuestion = Q.nbind(Question.create, Question);

module.exports = {
  getAllQuestions: function(req, res, next) {
    findAllQuestions({})
      .then(function(questions) {
        res.json(questions);
      })
      .fail(function(err) {
        next(err);
      });
  },
  createDummyData: function(req, res, next) {
    var dummyData = [
      {choice1: 'Always be late', choice2: 'Always be unprepared'},
      {choice1: 'Be a carrot', choice2: 'Be a cucumber'},
      {choice1: 'Always be naked', choice2: 'Always be itchy'},
      {choice1: 'Have no thumbs', choice2: 'Have only thumbs'},
      {choice1: 'Never read another book', choice2: 'Never hear another song'}
    ];

    for (var i = 0; i < dummyData.length; i++) {
      (function(i) {
        var newQuestion = {
          id: i,
          choice1: dummyData[i].choice1,
          choice2: dummyData[i].choice2
        };
        createQuestion(newQuestion)
          .then(function(createdQuestion) {
            console.log('created new question');
          });
      })(i);
    }
  }
};
