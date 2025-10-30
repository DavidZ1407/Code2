"use strict";
var Farm;
(function (Farm) {
    class Chicken extends Farm.Animal {
        constructor() {
            super();
            this.type = Farm.ANIMALTYPES.CHICKEN;
            this.food = Farm.FOODTYPE.GRAIN;
            this.foodAmount = 10;
            this.sound = "CLUCK CLUCK";
        }
        draw(_ctx, _pos) {
            _ctx.fillStyle = "#fff1c1";
            _ctx.beginPath();
            _ctx.ellipse(_pos.x + 100, _pos.y + 100, 70, 50, 0, 0, Math.PI * 2);
            _ctx.fill();
            _ctx.fillStyle = "#f7e28b";
            _ctx.beginPath();
            _ctx.ellipse(_pos.x + 100, _pos.y + 100, 30, 20, Math.PI / 4, 0, Math.PI * 2);
            _ctx.fill();
            _ctx.fillStyle = "#fff1c1";
            _ctx.beginPath();
            _ctx.arc(_pos.x + 130, _pos.y + 70, 25, 0, Math.PI * 2);
            _ctx.fill();
            _ctx.fillStyle = "orange";
            _ctx.beginPath();
            _ctx.moveTo(_pos.x + 150, _pos.y + 70);
            _ctx.lineTo(_pos.x + 165, _pos.y + 75);
            _ctx.lineTo(_pos.x + 150, _pos.y + 80);
            _ctx.fill();
            _ctx.fillStyle = "red";
            _ctx.beginPath();
            _ctx.arc(_pos.x + 125, _pos.y + 50, 6, 0, Math.PI * 2);
            _ctx.arc(_pos.x + 135, _pos.y + 48, 6, 0, Math.PI * 2);
            _ctx.arc(_pos.x + 145, _pos.y + 50, 6, 0, Math.PI * 2);
            _ctx.fill();
        }
    }
    Farm.Chicken = Chicken;
})(Farm || (Farm = {}));
//# sourceMappingURL=chicken.js.map