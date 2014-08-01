'use strict';

/**
 * @ngdoc service
 * @name chessTourFrontApp.gameService
 * @description
 * # gameService
 * Service in the chessTourFrontApp.
 */
angular.module('chessTourFrontApp')
    .service('GameService', function GameService() {
        this.is_player_1_won = function (game) {
            return game.status === 'player_1_won';
        };
        this.is_player_2_won = function (game) {
            return game.status === 'player_2_won';
        };
        this.is_pat = function (game) {
            return game.status === 'pat';
        };
        this.is_game_ended = function (game) {
            return !!game.status;
        };
        this.player_1_won = function (game) {
            this.setStatus(game, 'player_1_won');
        };
        this.player_2_won = function (game) {
            this.setStatus(game, 'player_2_won');
        };
        this.pat = function (game) {
            this.setStatus(game, 'pat');
        };
        this.setStatus = function(game, status){
            game.status = status === game.status ? null : status;
        }
    });
