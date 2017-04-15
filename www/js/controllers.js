angular.module('starter.controllers', [])

.controller('AppCtrl', function (api, $scope, $state, $ionicModal, $location, $document, $timeout, $http, $ionicPlatform, $ionicLoading, $twitterApi, $cordovaAppAvailability, $ionicActionSheet, $cordovaOauth, $ionicScrollDelegate, $ionicPosition) {
  var apiKey2 = '&apikey=ece3e4fd5f1ad6247f8551a0206c6c41'
  var apiKey = '&apikey=e7ef140f90ae825cd6b374b61953491a'
  var fecApi = '7Zpw72AlGPGQFDML24Xj3lSfU3GBzEwfw327ztka'
  var osLegUrl = 'https://www.opensecrets.org/api/?method=getLegislators&id='
  var osCandUrl = 'http://www.opensecrets.org/api/?method=candIndustry&cid='
  var openStatesApi = 'http://www.openstates.org/api/v1/legislators/?state='
  var openStatesApi2 = 'http://www.openstates.org/api/v1/metadata/'
  $scope.currentState
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

  // LOADING SPINNER
  $scope.show = function () {
    $ionicLoading.show({
      template: 'Loading...',
      duration: 3000
    }).then(function () {
      // console.log('The loading indicator is now displayed')
    })
  }
  $scope.hide = function () {
    $ionicLoading.hide().then(function () {
      // console.log('The loading indicator is now hidden')
    })
  }

  $scope.sendTweet = function(rep) {
    var url = 'https://twitter.com/intent/tweet/?text=%40' + rep + '%20I%E2%80%99d%20like%20to%20talk%20to%20you%20about%20restoring%20Free%20%26%20Fair%20Elections.%20Is%20this%20an%20issue%20you%20care%20about%3F%20%40wolfpachq%20%40cenkuygur'
    if (window.cordova) {
      cordova.InAppBrowser.open(url, '_blank');
    }
}

  $scope.sendFb = function(fb) {
    var url = 'https://www.facebook.com/' + fb
    if (window.cordova) {
      cordova.InAppBrowser.open(url, '_blank');
    }
}

  $scope.placeCall = function(num) {
    if (window.cordova) {
      cordova.InAppBrowser.open('tel:' + num, '_system');
    }
  }

  $scope.openWindow = function(url) {
    if (window.cordova) {
      cordova.InAppBrowser.open(url, '_blank');
    }
  }

  $scope.sendEmail = function(addr) {
    if (window.cordova) {
      cordova.InAppBrowser.open(addr, 'blank');
    }
}
  // ACTION SHEET POPUP FOR SCRIPT
  $scope.showScript = function () {
    // Show the action sheet
    var hideSheet = $ionicActionSheet.show({
      // buttons: [
      //  { text: '<b>Share</b> This' },
      //  { text: 'Move' }
      // ],
      // destructiveText: 'Delete',
      titleText: '<b> Phone Script </b></br> Hi, Im a citizen of your state and I would like to talk to you about an important resolution that aims to fix the corruption happening in Washington, D.C. by restoring Free and Fair Elections in America. The purpose of this Resolution is to clean up our election system so that the voices of average Americans don’t continue to be drowned out by big money and special interests. Is this an issue you care about? </br><b>If Yes...</b></br>Thank you. This Resolution calls for an amendment to our U.S. Constitution because we need to solve this problem for the long run. Since Congress is incapable of solving any problem, let alone this one, we are working to get this amendment through our state legislatures, which is why I’m talking to you! I trust you much more than Congress. The resolution calls for an amendment convention to propose an amendment that would deal with the influence of money in our political system. A national convention is the way for us to go around Congress and get an amendment ourselves without relying on them, nor waiting around for them. </br><b>If No...</b></br>Do you think there is any part of our election system that could work better for the average American?',
      cancelText: 'Cancel',
      cancel: function () {
          // add cancel code
      },
      buttonClicked: function (index) {
        return true
      }
    })
  }


  $scope.stateSelector = function (state) {
    var styles = {
      "background": "url('img/patern-adh.png')"
    }
    angular.element(document.querySelector('.rep-wall')).css(styles);
    var myEl = angular.element( document.querySelector( '.title' ) );
    myEl.addClass('animated');
    myEl.addClass('fadeIn');
    $state.go('app.reps')
    $scope.currentState = state.state

    // SHOW LOADING SPINNER
    $scope.show($ionicLoading);
    var stateName = state.abbrev;
    $scope.state = state.state;
    api.getReps(stateName)
      .then(function (response) {
        $scope.reps = response;
      })
    }     

  $scope.options = {  
    chart: {
      type: 'pieChart',
      donut: false,
      height: 200,
      x: function(d){return d.key;},
      y: function(d){return d.y;},
      showLabels: false,
      duration: 500,
      labelThreshold: 0.1,
      title: 'Campaign Contributions',
      labelSunbeamLayout: false,
      legend: {
        margin: {
          top: 29,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    }
  };
  $scope.data = [  
    {
      key: 'Fossil Fuels',
      y: 5
    },
    {
      key: 'Financial Industry',
      y: 2
    },
    {
      key: 'Pharmaceutical Industry',
      y: 9
    },
    {
      key: 'Lobbyists',
      y: 10
    }
  ];

  $scope.labels = ["", "", "", "", "", ""];
  $scope.series = ["Campaign Contributions"];
  $scope.colours = [{fillColor:['#f53d3d','#387ef5','#32db64','#444','#222','#69BB7B'], strokeColor:['#f53d3d','#387ef5','#32db64','#444','#222','#69BB7B']}];

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

  // Twitter integration
  var clientId = 'wldaNMRllRJ3N3LwTgnxkEjjq'
  var clientSecret = 'ScmgRGi3s94Y5RH8uU1FYpmnn78pBlAJH6BVGqEBghajespyEj'
  var myToken = ''

  $ionicPlatform.ready(function () {

    // IONIC DEVICE SCHEME
    var deviceInformation = ionic.Platform.device()

    var isWebView = ionic.Platform.isWebView()
    var isIPad = ionic.Platform.isIPad()
    var isIOS = ionic.Platform.isIOS()
    var isAndroid = ionic.Platform.isAndroid()
    var isWindowsPhone = ionic.Platform.isWindowsPhone()

    var currentPlatform = ionic.Platform.platform()
    var currentPlatformVersion = ionic.Platform.version()
  })

})