'use strict';

/**
 * @ngdoc function
 * @name chessTourFrontApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the chessTourFrontApp
 */
angular.module('chessTourFrontApp')
    .controller('GameCtrl', ['$scope', 'GameService', function ($scope, gameService) {
        $scope.gsrv = gameService;
        $scope.is_player_1_won = function () {
            return gameService.is_player_1_won($scope.game);
        };
        $scope.is_player_2_won = function () {
            return $scope.game.status === 'player_2_won';
        };
        $scope.is_pat = function () {
            return $scope.game.status === 'pat';
        };
        $scope.is_game_ended = function () {
            return !!$scope.game.status;
        };
        $scope.player_1_won = function () {
            $scope.setStatus('player_1_won');
        };
        $scope.player_2_won = function () {
            $scope.setStatus('player_2_won');
        };
        $scope.pat = function () {
            $scope.setStatus('pat');
        };
        $scope.setStatus = function(status){
            $scope.game.status = status === $scope.game.status ? null : status;
        }
    }]);
