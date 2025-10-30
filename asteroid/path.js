"use strict";
var Asteroids_1;
(function (Asteroids_1) {
    Asteroids_1.shapesAsteroids = [
        [
            [30, 1], [50, 1], [71, 1], [88, 31], [67, 40], [84, 63], [50, 93], [30, 79], [19, 87], [2, 63], [15, 43], [8, 20],
        ],
        [
            [39, 1], [53, 28], [78, 15], [91, 41], [76, 59], [78, 82], [44, 94], [15, 83], [1, 55], [14, 14],
        ],
        [
            [39, 0], [57, 26], [68, 7], [86, 31], [88, 70], [53, 58], [54, 96], [26, 91], [28, 76], [2, 56], [15, 19],
        ],
        [
            [37, 3], [70, 14], [62, 34], [83, 31], [78, 76], [55, 96], [20, 84], [7, 67], [5, 27], [20, 15], [39, 39],
        ]
    ];
    function createPaths() {
        Asteroids_1.asteroidPaths = createAsteroidPaths(Asteroids_1.shapesAsteroids);
        // ufoPath = createUfoPath();
    }
    Asteroids_1.createPaths = createPaths;
    function createAsteroidPaths(_shapes) {
        let paths = [];
        for (let type of _shapes) { // Korrigierter Typ für "type"
            let path = new Path2D();
            let first = true;
            for (let coordinates of type) {
                if (first)
                    path.moveTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0], coordinates[1]);
                first = false;
            }
            path.closePath();
            paths.push(path);
        }
        return paths;
    }
})(Asteroids_1 || (Asteroids_1 = {}));
//# sourceMappingURL=path.js.map