'use strict';

/**
 * @ngdoc service
 * @name chessTourFrontApp.players
 * @description
 * # players
 * Service in the chessTourFrontApp.
 */
angular.module('chessTourFrontApp')
    .factory('players', function Players(djResource) {
        return djResource('/api/players/:id/', {id: '@id'});
    });
