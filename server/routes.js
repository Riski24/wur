var questions = require('./questions/questions.js');
var controller = require('./database/controller.js')

module.exports = function(app) {
  app.get('/api/questions', controller.questions.getAll);
  app.post('/api/create-question', controller.questions.postOne);
  //app.get('/api/random', questions.getOneQuestion);
  //app.get('/api/create-dummmy-data', questionController.createDummyData);
};
