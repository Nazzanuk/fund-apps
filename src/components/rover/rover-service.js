(function () {
    app.service('RoverService', [function () {
        var that = this;

        var bounds = {
            x:100,
            y:100
        };

        var roverData = {x: 0, y: 0, angle: 0},
            directions = ['N', 'E', 'S', 'W'];

        var getX = function () {
            return roverData.x;
        };

        var getY = function () {
            return roverData.y;
        };

        var getAngle = function () {
            return roverData.angle;
        };

        var getPrettyAngle = function () {
            var index = ((getAngle() / 90) % 4);
            index = index >= 0 ? index : index + 4;
            return directions[index];
        };

        var getPosition = function () {
            return [getX(), getY(), getPrettyAngle()]
        };

        var moveSet = function (string) {
            var array = string.split('');
            _.each(array, function (letter) {
                that[letter]();
                checkBounds();
            });
        };

        var checkBounds = function () {
            if (getX() > bounds.x) roverData.x -= bounds.x;
            if (getY() > bounds.y) roverData.y -= bounds.y;
            if (getX() < 0) roverData.x += bounds.x;
            if (getY() < 0) roverData.y += bounds.y;
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

        that.getAngle = getAngle;
        that.moveSet = moveSet;
        that.getPosition = getPosition;
        that.F = F;
        that.B = B;
        that.L = L;
        that.R = R;

    }]);
}());