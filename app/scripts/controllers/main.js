'use strict';

/**
 * @ngdoc function
 * @name chessTourFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chessTourFrontApp
 */
angular.module('chessTourFrontApp')
    .controller('MainCtrl', function ($scope, $location, Tournament) {
        $scope.tournaments = Tournament.query();
        $scope.startNewTournament = function () {
            var tournament = new Tournament({name: 'Tournament name'});
            tournament.$save(function (t) {
                $location.path('/tournament/' + t.id);
            });
        }
    });
