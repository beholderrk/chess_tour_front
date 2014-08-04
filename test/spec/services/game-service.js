'use strict';

describe('Service: gameService', function () {

    // load the service's module
    beforeEach(module('chessTourFrontApp'));

    // instantiate service
    var gameService, game, gamesrv;
    beforeEach(inject(function (GameService) {
        gameService = GameService;
        game = {
            status: ''
        };
        gamesrv = new gameService(game);
    }));

    describe('is_game_ended', function () {
        it('false when status not set', function () {
            expect(gamesrv.is_game_ended()).toBe(false);
        });
        it('true when status is set', function () {
            gamesrv.player_1_won();
            expect(gamesrv.is_game_ended()).toBe(true);
        })
    });

    describe('set status and check status', function () {
        it('player_1_won', function () {
            gamesrv.player_1_won();
            expect(gamesrv.is_player_1_won()).toBe(true);
            gamesrv.player_1_won();
            expect(gamesrv.is_player_1_won()).toBe(false);
        });
        it('player_2_won', function () {
            gamesrv.player_2_won();
            expect(gamesrv.is_player_2_won()).toBe(true);
            gamesrv.player_2_won();
            expect(gamesrv.is_player_2_won()).toBe(false);
        });
        it('pat', function () {
            gamesrv.pat();
            expect(gamesrv.is_pat()).toBe(true);
            gamesrv.pat();
            expect(gamesrv.is_pat()).toBe(false);
        });
    });
});
