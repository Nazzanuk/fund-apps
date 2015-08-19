"use strict";

describe("rover service", function () {
    var RoverService;

    beforeEach(module("app"));

    beforeEach(inject(function (_RoverService_) {
        RoverService = _RoverService_;
    }));

    it("gets default values", function () {
        expect(RoverService.getX()).toEqual(0);
        expect(RoverService.getY()).toEqual(0);
        expect(RoverService.getAngle()).toEqual(0);
    });

    it("moves forward", function () {
        RoverService.F();
        expect(RoverService.getY()).toEqual(1);
    });

    it("moves backwards", function () {
        RoverService.B();
        expect(RoverService.getY()).toEqual(-1);
    });

    it("rotates left", function () {
        RoverService.L();
        expect(RoverService.getAngle()).toEqual(-90);
    });

    it("rotates right", function () {
        RoverService.R();
        expect(RoverService.getAngle()).toEqual(90);
    });

    it("FFRFF navigates to 2,2 facing East (90)", function () {
        RoverService.F();
        RoverService.F();
        RoverService.R();
        RoverService.F();
        RoverService.F();
        expect(RoverService.getX()).toEqual(2);
        expect(RoverService.getY()).toEqual(2);
        expect(RoverService.getAngle()).toEqual(90);
    });
});