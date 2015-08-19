(function () {
    app.service('RoverService', [function () {
        var that = this;

        var obstacles = [];
        var blocked = false;
        var status = "nothing to report";

        var bounds = {
            x: 100,
            y: 100
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

        var addObstacle = function (array) {
            obstacles.push({x: array[0], y: array[1], name: array[2]});
        };

        var getStatus = function () {
            return status;
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
            blocked = false;
            status = "nothing to report";

            _.each(array, function (letter) {
                if (blocked) return;
                var originalPosition = {x: getX(), y: getY(), angle: getAngle()};
                that[letter]();
                checkBounds();

                _.each(obstacles, function (obstacle) {
                    if (obstacle.x == getX() && obstacle.y == getY()) {
                        blocked = true;
                        status = "blocked by " + obstacle.name + " at [" + getX() + ", " + getY() + "]";
                    }
                });

                if (blocked) roverData = originalPosition;
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
        that.getStatus = getStatus;
        that.addObstacle = addObstacle;
        that.F = F;
        that.B = B;
        that.L = L;
        that.R = R;

    }]);
}());