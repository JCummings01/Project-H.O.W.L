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
    var apiKey2 = '&apikey=ece3e4fd5f1ad6247f8551a0206c6c41'
    var apiKey = '&apikey=e7ef140f90ae825cd6b374b61953491a'
    var osCandUrl = 'http://www.opensecrets.org/api/?method=candIndustry&cid='
    var osSectUrl = 'http://www.opensecrets.org/api/?method=candSector&cid='

    // factory.formatMoney = function(c, d, t) {
    //     var n = this, 
    //     c = isNaN(c = Math.abs(c)) ? 2 : c, 
    //     d = d == undefined ? "." : d, 
    //     t = t == undefined ? "," : t, 
    //     s = n < 0 ? "-" : "", 
    //     i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
    //     j = (j = i.length) > 3 ? j % 3 : 0;
    //     return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    // };

    factory.getIndustries = function(reps) {
     var defer = $q.defer()
     var industriesPerRep = []
     for (var i = 0; i < reps.data.response.legislator.length; i++) {
        console.log('loop working?', reps.data.response.legislator[i]['@attributes'].cid)
        var candId = reps.data.response.legislator[i]['@attributes'].cid
        $http.get(osSectUrl + candId + '&cycle=' + apiKey + '&output=json')
            .success(function (data, status, headers, config) {
                // console.log('data success on getIndustries', data)
                var repNum = data.response.sectors['@attributes'].cid
                for (var j = 0; j < data.response.sectors.sector.length; j++) {
                    var totalNum = Number(data.response.sectors.sector[j]['@attributes'].total).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
                    // var test = totalNum
                    console.log(typeof totalNum)
                    industriesPerRep.push({
                        repNum: data.response.sectors['@attributes'].cid,
                        indivs: data.response.sectors.sector[j]['@attributes'].indivs,
                        pacs: data.response.sectors.sector[j]['@attributes'].pacs,
                        sector_name: data.response.sectors.sector[j]['@attributes'].sector_name,
                        sectorid: data.response.sectors.sector[j]['@attributes'].sectorid,
                        total: totalNum
                    })
                    // console.log('repData each loop', industriesPerRep)
                }
                defer.resolve(industriesPerRep)
            })
            .error(function (data, status, headers, config) {
                console.log('data error on getIndustries', data)
                defer.resolve(data)
            })
            // .then(function(result){
            // console.log('then function after get reps...this work?', result)
            // things = result.data;
            // });
     }
    return defer.promise
    
  }

    return factory;
  }
})();
