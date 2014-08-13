'use strict';

/**
 * @ngdoc function
 * @name chessTourFrontApp.controller:TourCtrl
 * @description
 * # TourCtrl
 * Controller of the chessTourFrontApp
 */
angular.module('chessTourFrontApp')
    .controller('TourCtrl', ['$scope', '_', 'GameService', 'Tour', function ($scope, _, gameService, Tour) {
        // initial
        $scope.tourCompleted = function(){ return false; };
        $scope.tour = null;
        $scope.tourProccess = false;

        // get data
        $scope.$watch('tourId', function (value) {
            if (_.isNumber(value)){
                $scope.tour = Tour.get({id: $scope.tourId});
                $scope.tourCompleted = function () {
                    var games = _.flatten(_.map($scope.tour.groups, function(g){ return g.games }));
                    return _.every(_.map(games, function(game){ return new gameService(game).is_game_ended(); }));
                }
            }
        });

        $scope.nextTour = function () {
            function nextTourCallBack(){
                $scope.tourProccess = false;
            }
            $scope.tourProccess = true;
            $scope.$emit('next tour', nextTourCallBack);
        }
    }]);
