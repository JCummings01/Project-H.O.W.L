;(function () {
  'use strict'

  angular.module('starter')
    .factory('api', api)

  api.$inject = ['$http', '$q', '$timeout']

  function api ($http, $q, $timeout) {
    var factory = {}
    var apiKey = '&apikey=ece3e4fd5f1ad6247f8551a0206c6c41'
    var apiKey1 = '&apikey=e7ef140f90ae825cd6b374b61953491a'
    var osLegUrl = 'https://www.opensecrets.org/api/?method=getLegislators&id='

    factory.getReps = function(state) {
      var defer = $q.defer();
      $http.get(osLegUrl + state + apiKey + '&output=json')
        .success(function (data, status, headers, config) {
          var legislator = data.response.legislator // for UI
          defer.resolve(legislator);
        })
        .error(function (data, status, headers, config) {
          console.log('data error in getReps function in API factory')
        })
        .then(function(result){
        });
        return defer.promise
    }

    return factory;
  }
})();
