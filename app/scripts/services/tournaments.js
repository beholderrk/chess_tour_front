'use strict';

angular.module('chessTourFrontApp').factory('Tournament', function (djResource) {
    return djResource('/api/tournaments/:id/:action', {id: '@id'}, {
        players: {method: 'GET', params: {action: 'players'}, isArray: true}
    });
});