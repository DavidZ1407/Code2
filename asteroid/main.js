"use strict";
var AsteroidsInheritance;
(function (AsteroidsInheritance) {
    window.addEventListener("load", handleLoad);
    AsteroidsInheritance.linewidth = 2;
    let moveables = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        AsteroidsInheritance.crc2 = canvas.getContext("2d");
        AsteroidsInheritance.crc2.fillStyle = "black";
        AsteroidsInheritance.crc2.strokeStyle = "white";
        AsteroidsInheritance.crc2.lineWidth = AsteroidsInheritance.linewidth;
        AsteroidsInheritance.createPaths();
        // console.log("Asteroids paths: ", asteroidPaths);
        createAsteroids(5);
        // createShip();
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootProjectile(_event) {
        console.log("Shoot projectile");
        let origin = new AsteroidsInheritance.Vector(_event.clientX - AsteroidsInheritance.crc2.canvas.offsetLeft, _event.clientY - AsteroidsInheritance.crc2.canvas.offsetTop);
        let velocity = new AsteroidsInheritance.Vector(0, 0);
        velocity.random(100, 100);
        let projectile = new AsteroidsInheritance.Projectile(origin, velocity);
        moveables.push(projectile);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let hotspot = new AsteroidsInheritance.Vector(_event.clientX - AsteroidsInheritance.crc2.canvas.offsetLeft, _event.clientY - AsteroidsInheritance.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (let moveable of moveables) {
            if (moveable instanceof AsteroidsInheritance.Asteroid && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new AsteroidsInheritance.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                moveables.push(fragment);
            }
        }
        _asteroid.expendable = true;
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new AsteroidsInheritance.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function update() {
        // console.log("Update");
        AsteroidsInheritance.crc2.fillRect(0, 0, AsteroidsInheritance.crc2.canvas.width, AsteroidsInheritance.crc2.canvas.height);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
        // ship.draw();
        // handleCollisions();
        console.log("Moveable length: ", moveables.length);
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    }
})(AsteroidsInheritance || (AsteroidsInheritance = {}));
//# sourceMappingURL=Main.js.map