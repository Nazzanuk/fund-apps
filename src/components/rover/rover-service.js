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

        //Public Functions

        that.getX = getX;
        that.getY = getY;
        that.getAngle = getAngle;

    }]);
}());