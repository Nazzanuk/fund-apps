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
        expect(RoverService.getPosition()).toEqual([0, -1, 'N']);
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

    it("Check bounds", function () {
        RoverService.moveSet('BBB');
        expect(RoverService.getPosition()).toEqual([0, 98, 'N']);
    });

    it("Check bounds", function () {
        RoverService.moveSet('LFFF');
        expect(RoverService.getPosition()).toEqual([98, 0, 'W']);
    });
});