"use strict";

describe("rover service", function () {
    var RoverService;

    beforeEach(module("app"));

    beforeEach(inject(function (_RoverService_) {
        RoverService = _RoverService_;
    }));

    it("gets default values", function () {
        expect(RoverService.getPosition()).toEqual([0, 0, 'N']);
    });

    it("moves forward", function () {
        RoverService.moveSet('F');
        expect(RoverService.getPosition()).toEqual([0, 1, 'N']);
    });

    it("moves backwards", function () {
        RoverService.moveSet('B');
        expect(RoverService.getPosition()).toEqual([0, 99, 'N']);
    });

    it("rotates left", function () {
        RoverService.moveSet('L');
        expect(RoverService.getPosition()).toEqual([0, 0, 'W']);
    });

    it("rotates right", function () {
        RoverService.moveSet('R');
        expect(RoverService.getPosition()).toEqual([0, 0, 'E']);
    });

    it("FFRFF navigates to 2,2 facing East (90)", function () {
        RoverService.moveSet('FFRFF');
        expect(RoverService.getPosition()).toEqual([2, 2, 'E']);
    });

    it("Rotate 360", function () {
        RoverService.moveSet('RRRR');
        expect(RoverService.getPosition()).toEqual([0, 0, 'N']);
    });

    it("Rotate -360", function () {
        RoverService.moveSet('LLLL');
        expect(RoverService.getPosition()).toEqual([0, 0, 'N']);
    });

    it("Check Y bounds for [100,100]", function () {
        RoverService.moveSet('BBB');
        expect(RoverService.getPosition()).toEqual([0, 97, 'N']);
    });

    it("Check X bounds for [100,100]", function () {
        RoverService.moveSet('LFFF');
        expect(RoverService.getPosition()).toEqual([97, 0, 'W']);
    });

    it("Add Bike Obstacle", function () {
        RoverService.addObstacle([0, 2, 'bike']);
        RoverService.moveSet('FF');
        expect(RoverService.getPosition()).toEqual([0, 1, 'N']);
        expect(RoverService.getStatus()).toEqual('blocked by bike at [0, 2]');
    });

    it("Add Hole Obstacle", function () {
        RoverService.addObstacle([3, 3, 'hole']);
        RoverService.moveSet('FFFRFFFFFFFLRBBFRRF');
        expect(RoverService.getPosition()).toEqual([2, 3, 'E']);
        expect(RoverService.getStatus()).toEqual('blocked by hole at [3, 3]');
    });

    it("Add Phone Obstacle Reverse into it out of bounds", function () {
        RoverService.addObstacle([4, 97, 'phone']);
        RoverService.moveSet('LLRRBBBLBBBBBB');
        expect(RoverService.getPosition()).toEqual([3, 97, 'W']);
        expect(RoverService.getStatus()).toEqual('blocked by phone at [4, 97]');
    });
});