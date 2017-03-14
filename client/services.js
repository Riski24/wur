angular.module('app.services', [])

.factory('Questions', function($http) {

  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/questions'
    })
    .then(function(data) {
      return data.data;
    });
  };

  var getOne = function() {
    return $http({
      method: 'GET',
      url: '/api/random'
    })
    .then(function(data) {
      return data;
    })
  };

  return {
    getAll: getAll,
    getOne: getOne
  };
});