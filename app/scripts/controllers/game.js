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
        $scope.$watch('game', function (game) {
            if(!!game){
                $scope.gsrv = new gameService(game);
            }
        });
    }]);
