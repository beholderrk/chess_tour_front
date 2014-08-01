'use strict';

/**
 * @ngdoc function
 * @name chessTourFrontApp.controller:TourCtrl
 * @description
 * # TourCtrl
 * Controller of the chessTourFrontApp
 */
angular.module('chessTourFrontApp')
    .controller('TourCtrl', ['$scope', '_', 'GameService', function ($scope, _, gameService) {
        $scope.tourCompleted = function () {
            var games = _.flatten(_.map($scope.tour.groups, function(g){ return g.games }));
            return _.every(_.map(games, function(game){ return gameService.is_game_ended(game); }));
        }
    }]);
