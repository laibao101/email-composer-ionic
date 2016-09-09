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
var app =
    /**
     * starter Module
     *
     * Description
     */
    angular.module('starter', ['ionic', 'ngStorage']);

app.run(['$ionicPlatform', '$rootScope', '$state', '$localStorage', function($ionicPlatform, $rootScope, $state, $localStorage) {
    $ionicPlatform.ready(function() {
        $rootScope.$storage = $localStorage.$default({
            seenIntro: false
        });
        if ($rootScope.$storage.seenIntro) {
            event.preventDefault();
            $sate.go('app');
        }
    });
}]);


app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
  $stateProvider
  .state('intro',{
    url:"/",
    templateUrl:"templates/intro.html",
    controller:"IntroCtrl",
  })
  .state('app',{
    url:"/app",
    templateUrl:"templates/app.html"
  });

  $urlRouterProvider.otherwise("/");
}])




app.controller('IntroCtrl', ['$scope', '$rootScope', function ($scope,$rootScope) {
  $scope.slides={
    currentSlide:0
  };
  $scope.title='<i class="icon ion-android-home"></i>';
  $scope.slideChange=function (index) {
    $scope.sildeIndex=index;
    if (index==2) {
      $rootScope.$storage.seenIntro=true;
    }
  }
}])















