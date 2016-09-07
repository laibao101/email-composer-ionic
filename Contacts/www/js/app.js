// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// angular.module('starter', ['ionic'])

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//       // for form inputs)
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

//       // Don't remove this line unless you know what you are doing. It stops the viewport
//       // from snapping when text inputs are focused. Ionic handles this internally for
//       // a much nicer keyboard experience.
//       cordova.plugins.Keyboard.disableScroll(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// })

var app = angular.module('starter', ['ionic', 'ngCordova']);

app.run(['$ionicPlatform', function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.Statusbar) {
            Statusbar.styleDefault();
        }
    });


}]);


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tabs', {
            url: '/tab',
            abstract: true,
            templateUrl: "templates/tabs.html",
        })
        .state('tabs.find', {
            url: "/find",
            views: {
                'find-tab': {
                    templateUrl: "templates/find.html"
                }
            }
        })
        .state('tabs.add', {
            url: "/add",
            views: {
                'add-tab': {
                    templateUrl: "templates/add.html"
                }
            }
        });
    $urlRouterProvider.otherwise("/tab/find");
}]);


app.controller('ContactCtrl', ['$scope', '$cordovaContacts', function ($scope,$cordovaContacts) {
  $scope.contactFind={
    "name":{
      "givenName":"Not",
      "familyName":"Avaliable"
    },
    "phoneNumbers":[
      {
        "value":"Not Avaliable",
        "type":""
      }
    ],
    "emails":[
      {
        "value":"Not Avaliable"
      }
    ]
  };


  $scope.contactSave={
    "name":{
      "givenName":"Student",
      "familyName":"Ionic"
    },
    "phoneNumbers":[
      {
        "value":"1234567",
        "type":"mobile"
      }
    ],
    "emails":[
      {
        "value":"ivan.zhou@meginfo.com",
      }
    ]
  };

  $scope.pickContact=function() {
    $cordovaContacts.pickContact().then(function (result) {
      console.log(result);

    },function (err) {
      alert("There is an error saving contact. Please see console");
      console.log(err);
    })
  };

  $scope.addContact=function () {
    $cordovaContacts.save($scope.contactSave).then(function (result) {
      alert("The contact information has been saved");
    },function (err) {
      alert("There is an error saving contact. Please see console");
      console.log(err);
    })
  }

}]);








