var collection = {
  data: [
    {choice1: 'Always be late', choice2: 'Always be unprepared'},
    {choice1: 'Be a carrot', choice2: 'Be a cucumber'},
    {choice1: 'Always be naked', choice2: 'Always be itchy'},
    {choice1: 'Have no thumbs', choice2: 'Have only thumbs'},
    {choice1: 'Never read another book', choice2: 'Never hear another song'}
]};

module.exports.getQuestions = function(req, res) {
  res.json(collection);
};

module.exports.getOneQuestion = function(req, res) {
  res.json(collection.data[0]);
};
