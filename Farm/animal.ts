namespace Farm {
    export enum ANIMALTYPES {
        NONE,
        COW,
        PIG,
        CHICKEN,
    }

    export enum FOODTYPE {
        NONE,
        CARROT,
        HAY,
        GRAIN,
    }

    export type Vector2 = { x: number, y: number }

   
    export abstract class Animal {
        protected type: ANIMALTYPES = ANIMALTYPES.NONE;
        protected food: FOODTYPE = FOODTYPE.NONE;
        protected foodAmount: number = 0;
        protected sound: string = "";
        protected name: string = "";

        public setName(_name: string): void {
            this.name = _name;
        }

        public abstract draw(_ctx: CanvasRenderingContext2D, _pos: Vector2): void;

        public singSong(_ctx: CanvasRenderingContext2D, _pos: Vector2): void {
            const tmpName: string = "Name: " + this.name;
            _ctx.strokeStyle = "black";
            _ctx.font = "20px Arial";
            _ctx.strokeText(tmpName, _pos.x, _pos.y + 200, 400);

            const songText1 = "Old Macdonald had a farm, E-I-E-I-O";
            const songText2 = `And on his farm he had a ${this.name}, E-I-E-I-O`;
            const songText3 = `With a ${this.sound} here and a ${this.sound} there`;
            const songText4 = `Here a ${this.sound}, there a ${this.sound}`;
            const songText5 = `Everywhere a ${this.sound}`;

            _ctx.strokeText(songText1, _pos.x, _pos.y + 230, 400);
            _ctx.strokeText(songText2, _pos.x, _pos.y + 260, 400);
            _ctx.strokeText(songText3, _pos.x, _pos.y + 290, 400);
            _ctx.strokeText(songText4, _pos.x, _pos.y + 320, 400);
            _ctx.strokeText(songText5, _pos.x, _pos.y + 350, 400);
            _ctx.strokeText(songText1, _pos.x, _pos.y + 380, 400);
        }
    }
}
