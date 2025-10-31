"use strict";
var AsteroidsInheritance;
(function (AsteroidsInheritance) {
    class Moveable {
        position;
        velocity;
        expendable = false;
        constructor(_position) {
            // console.log("Moveable constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new AsteroidsInheritance.Vector(0, 0);
            this.velocity = new AsteroidsInheritance.Vector(0, 0);
        }
        move(_timeslice) {
            // console.log("Moveable move");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += AsteroidsInheritance.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += AsteroidsInheritance.crc2.canvas.height;
            if (this.position.x > AsteroidsInheritance.crc2.canvas.width)
                this.position.x -= AsteroidsInheritance.crc2.canvas.width;
            if (this.position.y > AsteroidsInheritance.crc2.canvas.height)
                this.position.y -= AsteroidsInheritance.crc2.canvas.height;
        }
        draw() {
            // console.log("Moveable move");
        }
    }
    AsteroidsInheritance.Moveable = Moveable;
})(AsteroidsInheritance || (AsteroidsInheritance = {}));
//# sourceMappingURL=Moveable.js.map