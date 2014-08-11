'use strict';

/**
 * @ngdoc directive
 * @name chessTourFrontApp.directive:playersList
 * @description
 * # playersList
 */
angular.module('chessTourFrontApp')
    .directive('playersList', function (_) {
        return {
            templateUrl: 'views/directives/players-list.html',
            restrict: 'E',
            controller: 'PlayersCtrl',
            scope: {
                players: '=',
                scores: '='
            },
            link: function ($scope, $element, $attrs) {
                $scope.getScore = function(player){
                    var score = _.findWhere($scope.scores, {player: player.id});
                    return score.score;
                }
            }
        };
    });
