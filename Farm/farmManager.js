"use strict";
var Farm;
(function (Farm) {
    class FarmManager {
        money;
        day;
        hay;
        grain;
        carrots;
        constructor() {
            this.money = 100;
            this.day = 1;
            this.hay = 50;
            this.grain = 25;
            this.carrots = 40;
            console.log(this.money, this.day);
        }
        showFood(_ctx, _pos, _foodType) {
            let foodCost = 0;
            _ctx.font = "20px Arial";
            _ctx.strokeStyle = "black";
            switch (_foodType) {
                case Farm.FOODTYPE.HAY:
                    _ctx.fillStyle = "#d4b86b";
                    for (let i = 0; i < 10; i++) {
                        _ctx.fillRect(_pos.x + i * 6, _pos.y + 30 - (Math.random() * 15), 5, 25);
                    }
                    _ctx.strokeRect(_pos.x - 5, _pos.y + 10, 70, 40);
                    _ctx.strokeText("Hay: " + this.hay, _pos.x + 90, _pos.y + 35);
                    foodCost = 15;
                    break;
                case Farm.FOODTYPE.CARROT:
                    for (let i = 0; i < 3; i++) {
                        _ctx.fillStyle = "orange";
                        _ctx.beginPath();
                        _ctx.moveTo(_pos.x + i * 30, _pos.y + 30);
                        _ctx.lineTo(_pos.x + 10 + i * 30, _pos.y);
                        _ctx.lineTo(_pos.x + 20 + i * 30, _pos.y + 30);
                        _ctx.closePath();
                        _ctx.fill();
                        _ctx.strokeStyle = "green";
                        _ctx.beginPath();
                        _ctx.moveTo(_pos.x + 10 + i * 30, _pos.y);
                        _ctx.lineTo(_pos.x + 5 + i * 30, _pos.y - 10);
                        _ctx.lineTo(_pos.x + 15 + i * 30, _pos.y - 10);
                        _ctx.stroke();
                    }
                    _ctx.strokeStyle = "black";
                    _ctx.strokeText("Carrots: " + this.carrots, _pos.x + 120, _pos.y + 30);
                    foodCost = 5;
                    break;
                case Farm.FOODTYPE.GRAIN:
                    _ctx.fillStyle = "#f5d97a";
                    for (let i = 0; i < 30; i++) {
                        const gx = _pos.x + Math.random() * 60;
                        const gy = _pos.y + Math.random() * 40;
                        _ctx.beginPath();
                        _ctx.ellipse(gx, gy, 3, 6, Math.random(), 0, Math.PI * 2);
                        _ctx.fill();
                    }
                    _ctx.strokeText("Grain: " + this.grain, _pos.x + 90, _pos.y + 35);
                    foodCost = 7;
                    break;
            }
            return foodCost;
        }
    }
    Farm.FarmManager = FarmManager;
})(Farm || (Farm = {}));
//# sourceMappingURL=farmManager.js.map