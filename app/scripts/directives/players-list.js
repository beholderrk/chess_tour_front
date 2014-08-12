'use strict';

/**
 * @ngdoc directive
 * @name chessTourFrontApp.directive:playersList
 * @description
 * # playersList
 */
angular.module('chessTourFrontApp')
    .directive('playersList', function (_, $rootScope, GameService, Score) {
        return {
            templateUrl: 'views/directives/players-list.html',
            restrict: 'E',
            controller: 'PlayersCtrl',
            scope: {
                tournament: '='
            },
            link: function ($scope, $element, $attrs) {
                $scope.getScore = function(player){
                    var score = _.findWhere($scope.tournament.scores, {player: player.id});
                    return score.score;
                };
                $rootScope.$on('game status changed', function (event, game) {
                    var updateScore = function (scores) {
                        var new_score = scores[0];
                        var old_score = _.findWhere($scope.tournament.scores, {id: new_score.id});
                        old_score.score = new_score.score;
                    };

                    Score.query({player: game.player1.id, tournament: $scope.tournament.id}, updateScore);
                    Score.query({player: game.player2.id, tournament: $scope.tournament.id}, updateScore);
                })
            }
        };
    });
