var questions = require('./questions/questions.js');
var questionController = require('./questions/questionController')

module.exports = function(app) {
  app.get('/api/questions', questions.getQuestions);
  app.get('/api/random', questions.getOneQuestion);
};
