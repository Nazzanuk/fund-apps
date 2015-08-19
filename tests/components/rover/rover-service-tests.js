"use strict";

describe("rover service", function () {
    var RoverService;

    beforeEach(module("app"));

    beforeEach(inject(function (_RoverService_) {
        RoverService = _RoverService_;
    }));

    it("gets default values", function () {
        expect(RoverService.getPosition()).toEqual([0, 0, 0]);
    });

    it("moves forward", function () {
        RoverService.moveSet('F');
        expect(RoverService.getPosition()).toEqual([0, 1, 0]);
    });

    it("moves backwards", function () {
        RoverService.moveSet('B');
        expect(RoverService.getPosition()).toEqual([0, -1, 0]);
    });

    it("rotates left", function () {
        RoverService.moveSet('L');
        expect(RoverService.getPosition()).toEqual([0, 0, -90]);
    });

    it("rotates right", function () {
        RoverService.moveSet('R');
        expect(RoverService.getPosition()).toEqual([0, 0, 90]);
    });

    it("FFRFF navigates to 2,2 facing East (90)", function () {
        RoverService.moveSet('FFRFF');
        expect(RoverService.getPosition()).toEqual([2, 2, 90]);
    });

    it("Add shorthand FFRFF navigates to 2,2 facing East (90)", function () {
        RoverService.moveSet('FFRFF');
        expect(RoverService.getPosition()).toEqual([2, 2, 90]);
    });
});