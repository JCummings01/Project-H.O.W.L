angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'ngCordovaOauth', 'ngTwitter', 'chart.js', 'duScroll', 'nvd3'])

.run(function ($ionicPlatform, $rootScope) {
  var clientId = 'wldaNMRllRJ3N3LwTgnxkEjjq'
  var clientSecret = 'ScmgRGi3s94Y5RH8uU1FYpmnn78pBlAJH6BVGqEBghajespyEj'
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
      cordova.plugins.Keyboard.disableScroll(true)
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault()
    }
  })
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.reps', {
      url: '/reps',
      views: {
        'menuContent': {
          templateUrl: 'templates/reps.html'
        }
      }
    })
    .state('app.zip', {
      url: '/zip',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/reps')
})