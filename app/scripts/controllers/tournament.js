'use strict';

/**
 * @ngdoc function
 * @name chessTourFrontApp.controller:TournamentCtrl
 * @description
 * # TournamentCtrl
 * Controller of the chessTourFrontApp
 */
angular.module('chessTourFrontApp')
    .controller('TournamentCtrl', function ($scope, $http, $routeParams, Tournament) {
        $scope.tournament = Tournament.get({id: $routeParams.tournamentId});
        $scope.started = function () {
            if (!!$scope.tournament.tours){
                return $scope.tournament.tours.length > 0;
            }
            return false;
        };
        $scope.$on('start tournament', function () {
            $scope.tournament.$save(function (tournament) {
                Tournament.start({id: tournament.id}, function(tournament){
                    $scope.tournament = tournament;
                });
            });
        });
    });
