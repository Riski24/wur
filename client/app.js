angular.module('wur', [
  'wur.random',
  'wur.questions'
])
.config(function($routeProvider)) {
  $routeProvider
    .when('/random', {
      templateURL: '',
      controller: ''
    });
}