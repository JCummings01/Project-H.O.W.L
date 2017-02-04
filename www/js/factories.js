// var apiFactory = angular.module('starter.factories', [])

// apiFactory.factory('api', function ($scope, $ionicModal, $timeout, $http, $ionicPlatform, $ionicLoading, $twitterApi, $cordovaAppAvailability, $ionicActionSheet) {
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   // $scope.$on('$ionicView.enter', function(e) {
//   // });
//   var services = {}

//   return services;
// })
;(function () {
  'use strict'

  angular.module('starter')
    .factory('api', api)

  api.$inject = ['$http', '$q', '$timeout']

  function api ($http, $q, $timeout) {
    var factory = {}
    var apiKey = '&apikey=ece3e4fd5f1ad6247f8551a0206c6c41'
    var apiKey1 = '&apikey=e7ef140f90ae825cd6b374b61953491a'
    var osCandUrl = 'http://www.opensecrets.org/api/?method=candIndustry&cid='
    var osSectUrl = 'http://www.opensecrets.org/api/?method=candSector&cid='
    var openSecretsApi =  'http://openstates.org/api/v1/legislators/?state='

    // factory.getCandData = function() {
    //   var defer = $q.defer()
    //   $http.get('candidateJSON.json')
    //     .success(function(data, status, headers, config) {
    //       console.log('success loading candJSON', data)
    //     })
    //     .error(function(data, status, headers, config) {
    //       console.log('error loading candJSON data', data)
    //     })
    //     .then(function(result){
    //         console.log('then function after getCandJSON...', result)
    //         // things = result.data;
    //     })
    //     return defer.promise
    // }

    // factory.getJson = function() {
    // var defer = $q.defer()
    // $http.get('JSONTEST.json')
    //   .success(function(data, status, headers, config) {
    //     console.log('success loading getJSON', data.data)
    //     defer.resolve(data.data)
    //     // $scope.doodles = data;
    //   })
    //   .error(function(data, status, headers, config) {
    //     console.log('error loading getJSON', data)
    //   })
    //   .then(function(result){
    //       console.log('then function after getJSON...', result)
    //       // things = result.data;
    //   })
    //   return defer.promise
    // }

//     factory.getIndustries = function(reps) {
//      var defer = $q.defer()
//      var industriesPerRep = []
//      for (var i = 0; i < reps.data.response.legislator.length; i++) {
//         console.log('loop working?', reps.data.response.legislator[i]['@attributes'].cid)
//         var candId = reps.data.response.legislator[i]['@attributes'].cid
//         $http.get(osSectUrl + candId + '&cycle=' + apiKey + '&output=json')
//             .success(function (data, status, headers, config) {
//                 // console.log('data success on getIndustries', data)
//                 var repNum = data.response.sectors['@attributes'].cid
//                 for (var j = 0; j < data.response.sectors.sector.length; j++) {
//                     var totalNum = Number(data.response.sectors.sector[j]['@attributes'].total).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
//                     industriesPerRep.push({
//                         repNum: data.response.sectors['@attributes'].cid,
//                         indivs: data.response.sectors.sector[j]['@attributes'].indivs,
//                         pacs: data.response.sectors.sector[j]['@attributes'].pacs,
//                         sector_name: data.response.sectors.sector[j]['@attributes'].sector_name,
//                         sectorid: data.response.sectors.sector[j]['@attributes'].sectorid,
//                         total: totalNum
//                     })
//                 }
//                 // console.log('industriesPerRep', industriesPerRep)
//                 defer.resolve(industriesPerRep)
//             })
//             .error(function (data, status, headers, config) {
//                 console.log('data error on getIndustries', data)
//                 defer.resolve(data)
//             })
//             // .then(function(result){
//             // console.log('then function after get reps...this work?', result)
//             // things = result.data;
//             // });
//      }
//     return defer.promise
    
//   }

    return factory;
  }
})();
