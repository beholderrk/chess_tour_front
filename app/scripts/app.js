'use strict';

/**
 * @ngdoc overview
 * @name chessTourFrontApp
 * @description
 * # chessTourFrontApp
 *
 * Main module of the application.
 */
angular
    .module('chessTourFrontApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'djangoRESTResources',
        'underscore'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/tournament/:tournamentId', {
                templateUrl: 'views/tournament.html',
                controller: 'TournamentCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
