'use strict';

/**
 * @ngdoc function
 * @name chessTourFrontApp.controller:PlayersListCtrl
 * @description
 * # PlayersListCtrl
 * Controller of the chessTourFrontApp
 */
angular.module('chessTourFrontApp')
    .controller('PlayersListCtrl', function ($scope, Tournament) {
        $scope.$watch('tournament.id', function (tournament_id) {
            if(angular.isNumber(tournament_id)){
                $scope.players = Tournament.players({id: tournament_id});
            }
        });
    });
