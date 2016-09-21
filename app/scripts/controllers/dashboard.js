'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
    .controller('DashboardCtrl', function($scope, $state) {

        $scope.$state = $state;
        $scope.selectedMenu = 'dashboard';
        $scope.collapseVar = 1;
        $scope.multiCollapseVar = 0;

        $scope.check = function(x) {

            if (x == $scope.collapseVar) {
                $scope.collapseVar = 0;
            } else {
                $scope.collapseVar = x;
            }
        };


    }).directive('prettyprint', function() {
        return {
            restrict: 'C',
            link: function postLink(scope, element, attrs) {
                element.html(prettyPrintOne(element.html(), '', true));
            }
        };
    });
