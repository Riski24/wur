angular.module('app.questions', [])

.controller('QuestionsController', function($scope, Questions) {
  // $scope.defaultQuestions = [
  //   {choice1: 'Always be late', choice2: 'Always be unprepared'},
  //   {choice1: 'Be a carrot', choice2: 'Be a cucumber'},
  //   {choice1: 'Always be naked', choice2: 'Always be itchy'},
  //   {choice1: 'Have no thumbs', choice2: 'Have only thumbs'},
  //   {choice1: 'Never read another book', choice2: 'Never hear another song'}
  // ]
  Questions.getAll()
  .then(function(data) {
    console.log(data)
    $scope.defaultQuestions = data.data;
  });
});