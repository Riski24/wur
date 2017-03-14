var Sequelize = require('sequelize');
var db = null;
if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL, {
    logging: false
  });
} else {
  db = new Sequelize('wur_local', 'root', '', {
    logging: false
  });
}

var questions = db.define('questions', {
  choice1: {type: Sequelize.STRING, allowNull: false},
  choice2: {type: Sequelize.STRING, allowNull: false}
}, {
  timestamps: false
});


questions.sync();

exports.questions = questions;
