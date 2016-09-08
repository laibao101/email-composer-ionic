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
    $scope.pos = {
        x: 0,
        y: 0
    }
}])


app.directive('draggable', ['$ionicGesture', function($ionicGesture) {
    return {
        restrict: 'EAC',
        link: function(scope, element, attrs) {
            var elementSize = 100;
            var x = Math.round((window.screen.width - elementSize) / 2, 0),
                y = Math.round((window.screen.height - elementSize) / 2, 0);
            scope.pos.x = x;
            scope.pos.y = y;
            console.log(scope.pos)
            element[0].style[ionic.CSS.TRANSFORM] = 'translate3d(' + x + 'px,' + y + 'px,0)';

            $ionicGesture.on('dragstart', function(ev) {
                console.log("dragstart: ");
                console.log(ev);
            }, element);

            $ionicGesture.on('dragend', function(ev) {
                console.log("dragend: ");
                console.log(ev);

                x += ev.gesture.deltaX;
                y += ev.gesture.deltaY;
                scope.pos.x = Math.round(x);
                scope.pos.y = Math.round(y);
                console.log(scope.pos);
                scope.$apply()
            }, element);




            $ionicGesture.on("drag transform", function(ev) {
                console.log("drag transform: ");
                console.log(ev);
                element[0].style[ionic.CSS.TRANSFORM] = 'translate3d(' + (x + ev.gesture.deltaX) + 'px, ' + (y + ev.gesture.deltaY) + 'px,0)';
                scope.pos.x = Math.round(ev.gesture.deltaX);
                scope.pos.y = Math.round(ev.gesture.deltaY);
                console.log(scope.pos);
                scope.$apply()
            }, element);

        }
    };
}])
