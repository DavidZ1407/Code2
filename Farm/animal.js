"use strict";
var Farm;
(function (Farm) {
    let ANIMALTYPES;
    (function (ANIMALTYPES) {
        ANIMALTYPES[ANIMALTYPES["NONE"] = 0] = "NONE";
        ANIMALTYPES[ANIMALTYPES["COW"] = 1] = "COW";
        ANIMALTYPES[ANIMALTYPES["PIG"] = 2] = "PIG";
        ANIMALTYPES[ANIMALTYPES["CHICKEN"] = 3] = "CHICKEN";
    })(ANIMALTYPES = Farm.ANIMALTYPES || (Farm.ANIMALTYPES = {}));
    let FOODTYPE;
    (function (FOODTYPE) {
        FOODTYPE[FOODTYPE["NONE"] = 0] = "NONE";
        FOODTYPE[FOODTYPE["CARROT"] = 1] = "CARROT";
        FOODTYPE[FOODTYPE["HAY"] = 2] = "HAY";
        FOODTYPE[FOODTYPE["GRAIN"] = 3] = "GRAIN";
    })(FOODTYPE = Farm.FOODTYPE || (Farm.FOODTYPE = {}));
    class Animal {
        type = ANIMALTYPES.NONE;
        food = FOODTYPE.NONE;
        foodAmount = 0;
        sound = "";
        name = "";
        setName(_name) {
            this.name = _name;
        }
        singSong(_ctx, _pos) {
            const tmpName = "Name: " + this.name;
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
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=animal.js.map