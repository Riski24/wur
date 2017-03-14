var db = require('./config.js');

module.exports = {
  questions: {
    getAll: function(req, res) {
      db.questions.findAll({raw: true})
        .then(function(results) {
          //if (err) { console.error(err); }
          res.send(results);
        });
    },
    postOne: function(req, res) {
      db.questions.create({
        choice1: req.body.choice1,
        choice2: req.body.choice2
      })
      .then(function(results) {
        //if (err) { console.log(err) }
        console.log('question accepted into database');
        res.sendStatus(201);
      });
    }
  }
}
