angular.module('app', [
  'app.services',
  'app.questions',
  'app.random',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/questions', {
      controller: 'QuestionsController',
      templateUrl: 'routes/questions.html'
    })
    .when('/random', {
      controller: 'RandomController',
      templateUrl: 'routes/random.html'
    })
    .otherwise({
      redirectTo: '/questions'
    });
})