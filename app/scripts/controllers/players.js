'use strict';

/**
 * @ngdoc function
 * @name chessTourFrontApp.controller:PlayersCtrl
 * @description
 * # PlayersCtrl
 * Controller of the chessTourFrontApp
 */
angular.module('chessTourFrontApp')
    .controller('PlayersCtrl', function ($scope, players, _) {
        $scope.players = players.list;
        $scope.add = function(){
            $scope.players = $scope.players.concat([players.new_item()]);
            players.list = $scope.players;
        };
        $scope.remove = function(player){
            $scope.players = _.without($scope.players, player);
        };
        // todo: autocomplete
    });
