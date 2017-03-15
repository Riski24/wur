var Sequelize = require('sequelize');
var db = null;
if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL);
} else {
  db = new Sequelize('wur_local', 'root', '', {
    logging: false
  });
}

var users = db.define('users', {
  username: {type: Sequelize.STRING, allowNull: false, unique: true}
  //password: {type: Sequelize.STRING, allowNull: false}
}, {
  timestamps: false
});

var questions = db.define('questions', {
  choice1: {type: Sequelize.STRING, allowNull: false},
  choice2: {type: Sequelize.STRING, allowNull: false},
  votes1: {type: Sequelize.INTEGER, defaultValue: 0},
  votes2: {type: Sequelize.INTEGER, defaultValue: 0}
}, {
  timestamps: false
});

var userQuestionVotes = db.define('user_question_votes', {
  userid: {type: Sequelize.INTEGER, allowNull: false},
  questionid: {type: Sequelize.INTEGER, allowNull: false},
  choice: {type: Sequelize.INTEGER, allowNull: false}
}, {
  timestamps: false
});

// users.belongsToMany(questions, {through: 'user_question_vote'});
// questions.belongsToMany(users, {through: 'user_question_vote'});

users.sync();
questions.sync({force: true})
.then(function() {
/////////////////////////////////////////////////////////////////
////////////////////////// SAMPLE DATA //////////////////////////
  var sampleData = [
    {choice1: 'Always be late', choice2: 'Always be unprepared'},
    {choice1: 'Be a carrot', choice2: 'Be a cucumber'},
    {choice1: 'Always be naked', choice2: 'Always be itchy'},
    {choice1: 'Have no thumbs', choice2: 'Have only thumbs'},
    {choice1: 'Never read another book', choice2: 'Never hear another song'}
  ];

  for (var i = 0; i < sampleData.length; i++) {
    (function(i) {
      questions.create({
        choice1: sampleData[i].choice1,
        choice2: sampleData[i].choice2
      });
    })(i)
  }
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
});
userQuestionVotes.sync();

exports.users = users;
exports.questions = questions;
exports.userQuestionVotes = userQuestionVotes;
