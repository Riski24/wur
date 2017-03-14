angular.module('app.questions', [])

.controller('QuestionsController', function($scope, Questions) {
  Questions.getAll()
  .then(function(data) {
    $scope.questions = data;
  });
});