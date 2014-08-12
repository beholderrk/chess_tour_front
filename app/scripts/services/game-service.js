'use strict';

/**
 * @ngdoc service
 * @name chessTourFrontApp.gameService
 * @description
 * # gameService
 * Service in the chessTourFrontApp.
 */
angular.module('chessTourFrontApp')
    .factory('GameService', function GameService(djResource, $rootScope) {
        function Game(gamedata){
            if(gamedata){
                this.setData(gamedata);
            }
        }
        Game.prototype = {
            resource: djResource('/api/games/:id/', {id: '@id'}, {
                patch: {method: 'PATCH'}
            }),
            setData: function(gamedata) {
                this.game = gamedata;
            },
            is_player_1_won: function () {
                return this.game.status === 'player_1_won';
            },
            is_player_2_won: function () {
                return this.game.status === 'player_2_won';
            },
            is_pat: function () {
                return this.game.status === 'pat';
            },
            is_game_ended: function () {
                return !!this.game.status;
            },
            player_1_won: function () {
                this.setStatus('player_1_won');
            },
            player_2_won: function () {
                this.setStatus('player_2_won');
            },
            pat: function () {
                this.setStatus('pat');
            },
            setStatus: function(status){
                this.game.status = status === this.game.status ? null : status;
                this.resource.patch({id: this.game.id}, this.game, function(game){
                    $rootScope.$emit('game status changed', game);
                });
            }
        };
        return Game;
    });
