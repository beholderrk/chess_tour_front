'use strict';

/**
 * @ngdoc service
 * @name chessTourFrontApp.gameService
 * @description
 * # gameService
 * Service in the chessTourFrontApp.
 */
angular.module('chessTourFrontApp')
    .factory('GameService', function GameService() {
        return function(game){
            if (!game){
                return null;
            }

            this.game = game;

            this.is_player_1_won = function () {
                return this.game.status === 'player_1_won';
            };
            this.is_player_2_won = function () {
                return this.game.status === 'player_2_won';
            };
            this.is_pat = function () {
                return this.game.status === 'pat';
            };
            this.is_game_ended = function () {
                return !!this.game.status;
            };
            this.player_1_won = function () {
                this.setStatus('player_1_won');
            };
            this.player_2_won = function () {
                this.setStatus('player_2_won');
            };
            this.pat = function () {
                this.setStatus('pat');
            };
            this.setStatus = function(status){
                this.game.status = status === this.game.status ? null : status;
            }
        };
    });
