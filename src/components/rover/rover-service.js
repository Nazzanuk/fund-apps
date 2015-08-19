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
            roverData.x += Math.round(Math.sin(getAngle() * Math.PI / 180.0));
            roverData.y += Math.round(Math.cos(getAngle() * Math.PI / 180.0));
        };

        var B = function () {
            roverData.x -= Math.round(Math.sin(getAngle() * Math.PI / 180.0));
            roverData.y -= Math.round(Math.cos(getAngle() * Math.PI / 180.0));
        };

        var L = function () {
            roverData.angle -= 90;
        };

        var R = function () {
            roverData.angle += 90;
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