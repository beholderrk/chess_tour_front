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
//        return  {
//            new_item: function () {
//                return {
//                    id: null,
//                    name: '',
//                    elo: null
//                };
//            },
//            list: [
//                {
//                    id: 1,
//                    name: 'Магнус Карлсен',
//                    elo: 2877
//                },
//                {
//                    id: 2,
//                    name: 'Левон Аронян',
//                    elo: 2805
//                },
//                {
//                    id: 3,
//                    name: 'Ананд Вишванатан',
//                    elo: 2785
//                },
//                {
//                    id: 4,
//                    name: 'Владимир Крамник',
//                    elo: 2777
//                }
//            ]
//        }
    });
