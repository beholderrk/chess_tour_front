'use strict';

angular.module('chessTourFrontApp').service('tournaments', function () {
    this.query = function () {
        return [
            {
                id: 1,
                name: 'Йоханнесбург',
                year: 1981
            },
            {
                id: 2,
                name: 'Турин',
                year: 1982
            },
            {
                id: 3,
                name: 'Цюрих',
                year: 1953
            }
        ];
    };
    this.get = function(params){
        return {
            id: 1,
            name: 'Йоханнесбург',
            year: 1981,
            tours: [
                {
                    id: 1,
                    number: 1,
                    groups: [
                        {
                            id: 1,
                            name: '0',
                            games: [
                                {
                                    id: 1,
                                    player1: {
                                        id: 1,
                                        name: 'Магнус Карлсен'
                                    },
                                    player2: {
                                        id: 2,
                                        name: 'Левон Аронян'
                                    },
                                    status: ''
                                },
                                {
                                    id: 2,
                                    player1: {
                                        id: 3,
                                        name: 'Ананд Вишванатан'
                                    },
                                    player2: {
                                        id: 4,
                                        name: 'Владимир Крамник'
                                    },
                                    status: ''
                                }
                            ]
                        },
                        {
                            id: 2,
                            name: '1',
                            games: [
                                {
                                    id: 3,
                                    player1: {
                                        id: 5,
                                        name: 'Каруана Фабиано'
                                    },
                                    player2: {
                                        id: 6,
                                        name: 'Грищук Александр'
                                    },
                                    status: ''
                                },
                                {
                                    id: 4,
                                    player1: {
                                        id: 7,
                                        name: 'Топалов Веселин'
                                    },
                                    player2: {
                                        id: 8,
                                        name: 'Накамура Хикару'
                                    },
                                    status: ''
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    };
});