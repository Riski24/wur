angular.module('app', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      //controller: '',
      templateUrl: 'index.html'
    })
    .otherwise({
      redirectTo: '/'
    });
})