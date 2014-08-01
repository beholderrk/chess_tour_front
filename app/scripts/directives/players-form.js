'use strict';

/**
 * @ngdoc directive
 * @name chessTourFrontApp.directive:playersForm
 * @description
 * # playersForm
 */
angular.module('chessTourFrontApp')
    .directive('playersForm', function () {
        return {
            templateUrl: 'views/directives/players-form.html',
            restrict: 'E',
            controller: 'PlayersCtrl'
        };
    });
