var app = angular.module('app', []);
(function () {
    app.controller('RoverService', [function () {
        var that = this;

        var roverData = {
            x:1,
            y:0,
            facing:0
        };

        var getX = function () {
            return roverData.x;
        };

        that.getX = getX;


    }]);
}());