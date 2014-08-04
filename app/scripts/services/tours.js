'use strict';

/**
 * @ngdoc service
 * @name chessTourFrontApp.tours
 * @description
 * # tours
 * Factory in the chessTourFrontApp.
 */
angular.module('chessTourFrontApp')
    .factory('Tour', function (djResource) {
        return djResource('/api/tours/:id/', {id: '@id'});
    });
