angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  // $scope.$on('$ionicView.enter', function(e) {
  // });
  var apiKey = '&apikey=ece3e4fd5f1ad6247f8551a0206c6c41'
  var osLegUrl = 'https://www.opensecrets.org/api/?method=getLegislators&id='
  $scope.states = [
    {'state': 'Alabama', 'abbrev': 'AL'},
    {'state': 'Alaska', 'abbrev': 'AK'},
    {'state': 'Arizona', 'abbrev': 'AZ'},
    {'state': 'Arkansas', 'abbrev': 'AR'},
    {'state': 'California', 'abbrev': 'CA'},
    {'state': 'Colorado', 'abbrev': 'CO'},
    {'state': 'Connecticut', 'abbrev': 'CT'},
    {'state': 'Delaware', 'abbrev': 'DE'},
    {'state': 'Florida', 'abbrev': 'FL'},
    {'state': 'Georgia', 'abbrev': 'GA'},
    {'state': 'Hawaii', 'abbrev': 'HI'},
    {'state': 'Idaho', 'abbrev': 'ID'},
    {'state': 'Illinois', 'abbrev': 'IL'},
    {'state': 'Indiana', 'abbrev': 'IN'},
    {'state': 'Iowa', 'abbrev': 'IA'},
    {'state': 'Kansas', 'abbrev': 'KS'},
    {'state': 'Kentucky', 'abbrev': 'KY'},
    {'state': 'Louisiana', 'abbrev': 'LA'},
    {'state': 'Maine', 'abbrev': 'ME'},
    {'state': 'Maryland', 'abbrev': 'MD'},
    {'state': 'Massachusetts', 'abbrev': 'MA'},
    {'state': 'Michigan', 'abbrev': 'MI'},
    {'state': 'Minnesota', 'abbrev': 'MN'},
    {'state': 'Mississippi', 'abbrev': 'MS'},
    {'state': 'Missouri', 'abbrev': 'MO'},
    {'state': 'Montana', 'abbrev': 'MT'},
    {'state': 'Nebraska', 'abbrev': 'NE'},
    {'state': 'Nevada', 'abbrev': 'NV'},
    {'state': 'New Hampshire', 'abbrev': 'NH'},
    {'state': 'New Jersey', 'abbrev': 'NJ'},
    {'state': 'New Mexico', 'abbrev': 'NM'},
    {'state': 'New York', 'abbrev': 'NY'},
    {'state': 'North Carolina', 'abbrev': 'NC'},
    {'state': 'North Dakota', 'abbrev': 'ND'},
    {'state': 'Ohio', 'abbrev': 'OH'},
    {'state': 'Oklahoma', 'abbrev': 'OK'},
    {'state': 'Oregon', 'abbrev': 'OR'},
    {'state': 'Pennsylvania', 'abbrev': 'PA'},
    {'state': 'Rhode Island', 'abbrev': 'RI'},
    {'state': 'South Carolina', 'abbrev': 'SC'},
    {'state': 'South Dakota', 'abbrev': 'SD'},
    {'state': 'Tennessee', 'abbrev': 'TN'},
    {'state': 'Texas', 'abbrev': 'TX'},
    {'state': 'Utah', 'abbrev': 'UT'},
    {'state': 'Vermont', 'abbrev': 'VT'},
    {'state': 'Virginia', 'abbrev': 'VA'},
    {'state': 'Washington', 'abbrev': 'WA'},
    {'state': 'West Virginia', 'abbrev': 'WV'},
    {'state': 'Wisconsin', 'abbrev': 'WI'},
    {'state': 'Wyoming', 'abbrev': 'WY'}
  ]

  $scope.stateSelector = function (state) {
    console.log('received via stateSelector click', state)
    $http.get(osLegUrl + state + apiKey + '&output=json')
    .success(function (data, status, headers, config) {
      console.log('data success', data.response.legislator)
      $scope.reps = data.response.legislator // for UI
    })
    .error(function (data, status, headers, config) {
      console.log('data error')
    })
    // .then(function(result){
    //   things = result.data;
    // });
  }

  // Form data for the login modal
  $scope.loginData = {}

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal
  })

  // Triggered in the login modal to close it
  $scope.closeLogin = function () {
    $scope.modal.hide()
  }

  // Open the login modal
  $scope.login = function () {
    $scope.modal.show()
  }

  // Perform the login action when the user submits the login form
  $scope.doLogin = function () {
    console.log('Doing login', $scope.loginData)

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function () {
      $scope.closeLogin()
    }, 1000)
  }
})

.controller('RepsCtrl', function ($scope) {
  $scope.getReps = function () {

  }
})

.controller('PlaylistCtrl', function ($scope, $stateParams) {
})

// //NOTE: We are including the constant `ApiEndpoint` to be used here.
// .factory('Api', function($http, ApiEndpoint) {
//   console.log('ApiEndpoint', ApiEndpoint)
//
//   var getApiData = function() {
//     return $http.get(ApiEndpoint.url + '/tasks')
//       .then(function(data) {
//         console.log('Got some data: ', data);
//         return data;
//       });
//   };
//
//   return {
//     getApiData: getApiData
//   };
// })
