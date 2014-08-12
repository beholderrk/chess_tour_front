'use strict';

/**
 * @ngdoc service
 * @name chessTourFrontApp.scores
 * @description
 * # scores
 * Factory in the chessTourFrontApp.
 */
angular.module('chessTourFrontApp')
    .factory('Score', function (djResource) {
        return djResource('/api/scores/', {player: '@player', tournament: '@tournament'})
    });
