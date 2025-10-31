"use strict";
var AsteroidsInheritance;
(function (AsteroidsInheritance) {
    class Projectile extends AsteroidsInheritance.Moveable {
        lifetime = 2;
        constructor(_position, _velocity) {
            super(_position);
            console.log("Projectile constructor");
            this.velocity = _velocity.copy();
        }
        draw() {
            // console.log("Projectile draw");
            AsteroidsInheritance.crc2.save();
            AsteroidsInheritance.crc2.translate(this.position.x, this.position.y);
            AsteroidsInheritance.crc2.strokeRect(-2, -2, 2, 2);
            AsteroidsInheritance.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    AsteroidsInheritance.Projectile = Projectile;
})(AsteroidsInheritance || (AsteroidsInheritance = {}));
//# sourceMappingURL=Projectile.js.map