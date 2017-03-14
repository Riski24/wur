var questions = require('./questions/questions.js');

module.exports = function(app) {
  app.get('/api/questions', questions.getQuestions);
};
