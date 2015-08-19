(function () {
    app.service('RoverService', [function () {
        var that = this;

        var roverData = {
            x: 0,
            y: 0,
            angle: 0
        };

        var getX = function () {
            return roverData.x;
        };

        var getY = function () {
            return roverData.y;
        };

        var getAngle = function () {
            return roverData.angle;
        };

        var F = function () {

        };

        var B = function () {

        };

        var L = function () {

        };

        var R = function () {

        };

        //Public Functions

        that.getX = getX;
        that.getY = getY;
        that.getAngle = getAngle;
        that.F = F;
        that.B = B;
        that.L = L;
        that.R = R;

    }]);
}());