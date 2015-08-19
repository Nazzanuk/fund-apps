(function () {
    app.service('RoverService', [function () {
        var that = this;

        var obstacles = [],
            moveArray = [],
            blocked = false,
            status = "nothing to report";

        var bounds = {x: 100, y: 100},
            roverData = {x: 0, y: 0, angle: 0},
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

        /**
         * moves a string array one by one
         * @param string - 'FFFRFFFFFFFLRBBFRRF'
         */
        var moveSet = function (string) {
            moveArray = string.split('');
            blocked = false;
            status = "nothing to report";
            _.each(moveArray, moveSingle);
        };

        /**
         * a single move to the next position,
         * keeps the rover within the correct bounds,
         * checks if obstacle exists
         * and if so restores the previous position and sets an error message
         * @param letter - 'L'
         */
        var moveSingle = function (letter) {
            var originalPosition = {x: getX(), y: getY(), angle: getAngle()};
            move[letter]();
            checkBounds();
            _.each(obstacles, checkObstacle);
            if (blocked) roverData = originalPosition;
        };

        var checkObstacle = function (obstacle) {
            if (obstacle.x == getX() && obstacle.y == getY()) {
                blocked = true;
                status = "blocked by " + obstacle.name + " at [" + getX() + ", " + getY() + "]";
            }
        };

        var checkBounds = function () {
            if (getX() > bounds.x) roverData.x -= bounds.x;
            if (getY() > bounds.y) roverData.y -= bounds.y;
            if (getX() < 0) roverData.x += bounds.x;
            if (getY() < 0) roverData.y += bounds.y;
        };

        var move = {
            F: function () {
                roverData.x += Math.round(Math.sin(getAngle() * Math.PI / 180.0));
                roverData.y += Math.round(Math.cos(getAngle() * Math.PI / 180.0));
            },
            B: function () {
                roverData.x -= Math.round(Math.sin(getAngle() * Math.PI / 180.0));
                roverData.y -= Math.round(Math.cos(getAngle() * Math.PI / 180.0));
            },
            L: function () {
                roverData.angle -= 90;
            },
            R: function () {
                roverData.angle += 90;
            }
        };

        //Public Functions

        that.getAngle = getAngle;
        that.moveSet = moveSet;
        that.getPosition = getPosition;
        that.getStatus = getStatus;
        that.addObstacle = addObstacle;

    }]);
}());