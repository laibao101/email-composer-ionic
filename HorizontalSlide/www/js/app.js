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
    angular.module('starter', ['ionic']);

app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.myData = {
        value: "No value yet"
    }

    $scope.display = {
        value: "Not fired yet"
    };



}]);


app.controller('FirstCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.broadcast = function(param) {
        $rootScope.$broadcast("myEvent", param);
    };

}]);

app.controller('SecondCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.changeMyData = function(param) {
        $scope.myData.value = param;
    }
}]);

app.controller('ThirdCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.$on('myEvent', function(e, val) {
        $scope.display.value = 'Fired with param : ' + val;
    });

}])


app.directive('myDirective', ['$rootScope', function($rootScope) {
    console.log("Start directive");
    return {
        restrict: 'AEC',
        scope: {
            myData: '=data'
        },
        link: function(scope, element, attrs) {
            scope.$watch('attrs.data', function(newValue, oldValue, scope) {
                if (newValue != oldValue) {
                    console.log("myData has changeed");
                    console.log(newVal);
                }
            }, true);
        }
    };
}]);
