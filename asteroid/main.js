"use strict";
var Asteroids_1;
(function (Asteroids_1) {
    window.addEventListener("load", handleLoad);
    let asteroids = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Asteroids_1.crc2 = canvas.getContext("2d");
        Asteroids_1.crc2.fillStyle = "black";
        Asteroids_1.crc2.strokeStyle = "white";
        Asteroids_1.createPaths();
        console.log("Asteroids paths: ", Asteroids_1.asteroidPaths);
        createAsteroids(5);
        // createShip();
        // canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let hotspot = new Asteroids_1.Vector(_event.clientX - Asteroids_1.crc2.canvas.offsetLeft, _event.clientY - Asteroids_1.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new Asteroids_1.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        let index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function createAsteroids(_nAsteroids) {
        // console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new Asteroids_1.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("Update");
        Asteroids_1.crc2.fillRect(0, 0, Asteroids_1.crc2.canvas.width, Asteroids_1.crc2.canvas.height);
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
    }
})(Asteroids_1 || (Asteroids_1 = {}));
//# sourceMappingURL=main.js.map