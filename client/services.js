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

  return {
    getAll: getAll
  };
});