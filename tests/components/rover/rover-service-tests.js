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
});