'use strict';

/**
 * @ngdoc function
 * @name chessTourFrontApp.controller:PlayersFormCtrl
 * @description
 * # PlayersFormCtrl
 * Controller of the chessTourFrontApp
 */
angular.module('chessTourFrontApp')
    .controller('PlayersFormCtrl', function ($scope, Tournament, _) {
        $scope.$watch('tournament.id', function (tournament_id) {
            if(angular.isNumber(tournament_id)){
                $scope.players = Tournament.players({id: tournament_id});
            }
        });
        $scope.newItem = function () {
            return {
                id: null,
                name: '',
                elo: null
            };
        };
        $scope.add = function(){
            $scope.players.push($scope.newItem());
        };
        $scope.remove = function(player){
            $scope.players = _.without($scope.players, player);
        };
        // todo: autocomplete
    });
