'use strict';

/**
 * @ngdoc directive
 * @name chessTourFrontApp.directive:playersForm
 * @description
 * # playersForm
 */
angular.module('chessTourFrontApp')
    .directive('playersForm', function (_, players) {
        return {
            templateUrl: 'views/directives/players-form.html',
            restrict: 'E',
            controller: 'PlayersCtrl',
            scope: {
                players: '=',
                startTournament: '='
            },
            link: function ($scope, $element, $attrs) {
                $scope.newItem = function () {
                    return {
                        id: null,
                        name: '',
                        elo: null
                    };
                };
                $scope.addAll = function () {
                    $scope.players = players.query();
                };
                $scope.add = function(){
                    $scope.players.push($scope.newItem());
                };
                $scope.remove = function(player){
                    $scope.players = _.without($scope.players, player);
                };
                $scope.selectedObject = function (object, player) {
                    player.name = object.originalObject.name;
                    player.id = object.originalObject.id;
                    player.elo = object.originalObject.elo;
                }
            }
        };
    });
