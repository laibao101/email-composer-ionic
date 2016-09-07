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


var app=angular.module('starter', ['ionic','ngStorage']);

app.controller('MainCtrl', ['$scope', '$ionicPopup', '$ionicListDelegate', '$localStorage', function ($scope,$ionicPopup,$ionicListDelegate,$localStorage) {
   $scope.$storage=$localStorage.$default({
    items:[
      {"label":"First todo item"},
      {"label":"Second todo item"},
      {"label":"Third todo item"},
      {"label":"Fourth todo item"},
      {"label":"Fifth todo item"}
    ]
   });

   $scope.edit=function (index) {
     $scope.editItem={
      "label":$scope.$storage.items[index].label
     };
     var itemPopup=$ionicPopup.show({
      template:'<input type="text"  ng-model="editItem.label"/>',
      title:"Edit Todo",
      scope:$scope,
      buttons:[
        {text:"Cancel"},
        {
          text:'<b>Sava</b>',
          type:"buton-positive",
          onTap:function (e) {
            if (!$scope.editItem.label) {
              e.preventDefault();
            } else {
              $scope.$storage.items[index].label=$scope.editItem.label;
              return $scope.editItem; 
            }
          }
        }
      ],
     });
     itemPopup.then(function (res) {
       $ionicListDelegate.closeOptionButtons();
     });
   }


   $scope.data={"item":""};


   $scope.moveItem=function (item,fromIndex,toIndex) {
     $scope.$storage.items.splice(fromIndex,1);
     $scope.$storage.items.splice(toIndex,0,item);
   };

   $scope.onItemDelete=function (item) {
     $scope.$storage.items.splice($scope.$storage.items.indexOf(item),1);
   };

   $scope.addItem=function () {
     $scope.$storage.items.push({"label":$scope.data.item});
     $scope.data.item="";
   }

   

}])





















