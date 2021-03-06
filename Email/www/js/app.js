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

var app=angular.module('starter',['ionic','ngCordova']);

app.factory('Base64Icon', ['', function(){
  return "/9j/4AAQSkXJRg..."
}])

app.controller('EmailCtrl', ['$scope','$ionicPlatform','$cordovaEmailComposer','Base64Icon', function($scope,$ionicPlatform,$cordovaEmailComposer,Base64Icon){
  $ionicPlatform.ready(function () {
    $cordovaEmailComposer.isAvailable().then(function () {
      console.log("Email is available"); 
    },function () {
      alert('Email is not available');
    });
  });
  $scope.Base64Icon = Base64Icon;

  $scope.email={
    to:'ivan.zhou@meginfo.com',
    attachments:[
      'file://img/ionic.png',
      'base64:icon.jpg//'+Base64Icon
    ],
    subject:'Just testing Email Composer Cordova plugin',
    body:'How are you ? Nice greetings from <b>Ionic</b>',
    isHtml:true,
  };

  $scope.send=function () {
    $cordovaEmailComposer.open($scope.email).then(null,function () {
      $scope.thanYou=true;
    });
  };


}])





// var app = angular.module('starter', ['ionic', 'ngCordova']);

// app.controller('EmailCtrl', function($scope, $ionicPlatform, $cordovaEmailComposer, Base64Icon) {
//   $ionicPlatform.ready(function() {
//     $cordovaEmailComposer.isAvailable().then(function() {
//       // is available
//       console.log('Email is available');
//     }, function () {
//       // not available
//       alert('Email is not available');
//     });
//   });

//   $scope.Base64Icon = Base64Icon;
//   $scope.email = {
//     to: 'youremail@gmail.com',
//     // You can add cc or bcc field with array of emails
//     // cc: 'someone@gmail.com',
//     // bcc: ['test1@gmail.com', 'test2@gmail.com'],
//     attachments: [
//      'file://img/ionic.png',
//      // file:// is basically your www/ folder
//      // You can include any file such as PDF
//      // 'file://README.pdf'
//      "base64:icon.jpg//" + Base64Icon
//      // Note that you must include file name for base64 such as icon.jpg
//      // 'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
//     ],
//     subject: 'Just testing Email Composer Cordova plugin',
//     body: 'How are you? Nice greetings from <b>Ionic</b>',
//     isHtml: true
//   };

//   $scope.send = function() {
//     $cordovaEmailComposer.open($scope.email).then(null, function () {
//       // Callback when user cancelled or sent email
//       $scope.thankYou = true;
//     });
//   }
// });













