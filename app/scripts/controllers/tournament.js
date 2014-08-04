'use strict';

/**
 * @ngdoc function
 * @name chessTourFrontApp.controller:TournamentCtrl
 * @description
 * # TournamentCtrl
 * Controller of the chessTourFrontApp
 */
angular.module('chessTourFrontApp')
    .controller('TournamentCtrl', function ($scope, $routeParams, Tournament) {
        $scope.tournament = Tournament.get({id: $routeParams.tournamentId});
        $scope.started = function () {
            if (!!$scope.tournament.tours){
                return $scope.tournament.tours.length > 0;
            }
            return false;
        };
    });
