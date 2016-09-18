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


var app = angular.module('starter', ['ionic']);
/*
  Description:
  The Text.splitText() method breaks the Textnode into two nodes at the specified offset, keeping both nodes in the tree as siblings. After the split, the current node contains all the content up to the specified offset point, and a newly created node of the same type contains the remaining text.  The newly created node is returned to the caller.  If the original node had a parent, the new node is inserted as the next sibling of the original node.  If the offset is equal to the length of the original node, the newly created node has no data.

  Syntax:
  replacementNode = textnode.splitText(offset)
*/

app.controller('MyCtrl', ['$scope', '$ionicScrollDelegate', function($scope, $ionicScrollDelegate) {
    $scope.items = [];
    for (var i = 1; i <= 100; i++) {
        $scope.items.push({ id: i });
    }


}]);


app.directive('scrollProgress', ['$ionicScrollDelegate', function($ionicScrollDelegate) {
    return {
        restrict: 'AEC',
        template: '<div class="progress" style="{{percentage}}"></div>',
        link: function(scope, element, attrs) {
            scope.percentage = '0%';
            ionic.DoUtil.reday(function() {
                var windowHeight = $ionicScrollDelegate._instances[0].element.clientHeight,
                    scrollHeight = $ionicScrollDelegate._instances[0].element.querySelector('div.scroll').clientHeight,
                    dalta = scrollHeight - windowHeight;

                $ionicScrollDelegate._instances[0].$element.bind('scroll', function(e) {
                    var scrollPosition = $ionicScrollDelegate.getScrollPosition().top;
                    scope.percentage = 'width:' + (scrollPosition / delta * 100) + '%';
                    scope.$digest();
                });


            });
        }
    };
}]) 
