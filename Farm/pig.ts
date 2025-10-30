namespace Farm {
    export class Pig extends Animal {
        constructor() {
            super();
            this.type = ANIMALTYPES.PIG;
            this.food = FOODTYPE.CARROT;
            this.foodAmount = 30;
            this.sound = "OINK OINK";
        }

        public draw(_ctx: CanvasRenderingContext2D, _pos: Vector2): void {
            _ctx.fillStyle = "#f7a8b8";
            _ctx.beginPath();
            _ctx.ellipse(_pos.x + 100, _pos.y + 100, 80, 60, 0, 0, Math.PI * 2);
            _ctx.fill();
            _ctx.beginPath();
            _ctx.arc(_pos.x + 100, _pos.y + 40, 35, 0, Math.PI * 2);
            _ctx.fill();
            _ctx.fillStyle = "#e27d90";
            _ctx.beginPath();
            _ctx.ellipse(_pos.x + 100, _pos.y + 45, 20, 12, 0, 0, Math.PI * 2);
            _ctx.fill();
            _ctx.fillStyle = "black";
            _ctx.beginPath();
            _ctx.arc(_pos.x + 92, _pos.y + 45, 3, 0, Math.PI * 2);
            _ctx.arc(_pos.x + 108, _pos.y + 45, 3, 0, Math.PI * 2);
            _ctx.fill();
        }
    }
}
