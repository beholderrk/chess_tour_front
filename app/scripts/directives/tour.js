'use strict';

/**
 * @ngdoc directive
 * @name chessTourFrontApp.directive:tour
 * @description
 * # tour
 */
angular.module('chessTourFrontApp')
    .directive('tour', function () {
        return {
            templateUrl: 'views/directives/tour.html',
            restrict: 'E',
            controller: 'TourCtrl',
            scope: {
                tourId: '=tourId'
            }
        };
    });
