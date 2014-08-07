'use strict';

/**
 * @ngdoc directive
 * @name chessTourFrontApp.directive:playersList
 * @description
 * # playersList
 */
angular.module('chessTourFrontApp')
    .directive('playersList', function () {
        return {
            templateUrl: 'views/directives/players-list.html',
            restrict: 'E',
            controller: 'PlayersCtrl',
            scope: {
                players: '='
            },
            link: function ($scope, $element, $attrs) {
            }
        };
    });
