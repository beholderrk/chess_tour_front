'use strict';

/**
 * @ngdoc function
 * @name chessTourFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chessTourFrontApp
 */
angular.module('chessTourFrontApp')
    .controller('MainCtrl', function ($scope, tournaments) {
        $scope.tournaments = tournaments.query();
    });
