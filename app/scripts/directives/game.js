'use strict';

/**
 * @ngdoc directive
 * @name chessTourFrontApp.directive:game
 * @description
 * # game
 */
angular.module('chessTourFrontApp')
    .directive('game', function () {
        return {
            templateUrl: 'views/directives/game.html',
            restrict: 'E',
            controller: 'GameCtrl',
            scope: {
                game: '=chGame'
            }
        };
    });
