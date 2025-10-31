"use strict";
var AsteroidsInheritance;
(function (AsteroidsInheritance) {
    class Asteroid extends AsteroidsInheritance.Moveable {
        position;
        velocity;
        type;
        size;
        constructor(_size, _position) {
            super(_position);
            console.log("Asteroid constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new AsteroidsInheritance.Vector(0, 0);
            this.velocity = new AsteroidsInheritance.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        draw() {
            // console.log("Asteroid draw");
            AsteroidsInheritance.crc2.save();
            AsteroidsInheritance.crc2.translate(this.position.x, this.position.y);
            AsteroidsInheritance.crc2.scale(this.size, this.size);
            AsteroidsInheritance.crc2.translate(-50, -50);
            AsteroidsInheritance.crc2.lineWidth = AsteroidsInheritance.linewidth / this.size;
            AsteroidsInheritance.crc2.stroke(AsteroidsInheritance.asteroidPaths[this.type]);
            AsteroidsInheritance.crc2.restore();
        }
        isHit(_hotspot) {
            let hitsize = 50 * this.size;
            let difference = new AsteroidsInheritance.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    AsteroidsInheritance.Asteroid = Asteroid;
})(AsteroidsInheritance || (AsteroidsInheritance = {}));
//# sourceMappingURL=Asteroid.js.map