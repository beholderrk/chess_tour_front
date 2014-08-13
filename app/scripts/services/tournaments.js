'use strict';

angular.module('chessTourFrontApp').factory('Tournament', function (djResource) {
    return djResource('/api/tournaments/:id/:action/', {id: '@id'}, {
        start: {method: 'POST', params: {action: 'start'}},
        next: {method: 'POST', params: {action: 'next'}}
    });
});