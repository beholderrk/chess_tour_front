'use strict';

/**
 * @ngdoc function
 * @name chessTourFrontApp.controller:TournamentCtrl
 * @description
 * # TournamentCtrl
 * Controller of the chessTourFrontApp
 */
angular.module('chessTourFrontApp')
    .controller('TournamentCtrl', function ($scope, $routeParams, tournaments) {
        $scope.tournament = tournaments.get({id: $routeParams.tournamentId});
        $scope.started = function () {
            return $scope.tournament.tours.length > 0;
        };
    });
