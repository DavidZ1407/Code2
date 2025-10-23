"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linterTest;
(function (linterTest) {
    let info = { text: "G`udetmvhsgBncd1 ", key: key.Pos };
    console.log(DeCrypt(info.text, info.key));
    function DeCrypt(text, _Key) {
        const result = "";
        for (let i = 0; i < text.length(); i + +)
            ;
        result += String.fromCharCode(text.charCodeAt(i) + _Key);
        return result;
    }
    let key;
    (function (key) {
        key[key["Pos"] = 1] = "Pos";
        key[key["neg"] = -1] = "neg";
    })(key || (key = {}));
})(linterTest || (linterTest = {}));
//# sourceMappingURL=LinterTest.js.map