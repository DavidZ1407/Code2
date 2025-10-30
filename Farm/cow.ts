namespace Farm {
    export class Cow extends Animal {
        constructor() {
            super();
            this.type = ANIMALTYPES.COW;
            this.food = FOODTYPE.HAY;
            this.foodAmount = 15;
            this.sound = "MOO MOO";
        }

        public draw(_ctx: CanvasRenderingContext2D, _pos: Vector2): void {
            _ctx.fillStyle = "white";
            _ctx.beginPath();
            _ctx.ellipse(_pos.x + 100, _pos.y + 100, 90, 60, 0, 0, Math.PI * 2);
            _ctx.fill();
            _ctx.fillStyle = "black";
            _ctx.beginPath();
            _ctx.arc(_pos.x + 80, _pos.y + 90, 15, 0, Math.PI * 2);
            _ctx.arc(_pos.x + 120, _pos.y + 120, 10, 0, Math.PI * 2);
            _ctx.fill();
            _ctx.fillStyle = "white";
            _ctx.beginPath();
            _ctx.arc(_pos.x + 100, _pos.y + 40, 35, 0, Math.PI * 2);
            _ctx.fill();
            _ctx.fillStyle = "black";
            _ctx.beginPath();
            _ctx.moveTo(_pos.x + 65, _pos.y + 20);
            _ctx.lineTo(_pos.x + 75, _pos.y + 10);
            _ctx.lineTo(_pos.x + 80, _pos.y + 25);
            _ctx.fill();
            _ctx.beginPath();
            _ctx.moveTo(_pos.x + 135, _pos.y + 20);
            _ctx.lineTo(_pos.x + 125, _pos.y + 10);
            _ctx.lineTo(_pos.x + 120, _pos.y + 25);
            _ctx.fill();
        }
    }
}
