"use strict";
var LinterTest;
(function (LinterTest) {
    let Key;
    (function (Key) {
        Key[Key["POS"] = 1] = "POS";
        Key[Key["NEG"] = -1] = "NEG";
    })(Key || (Key = {}));
    const info = { text: "G`udetmvhsgBncd1 ", key: Key.POS };
    console.log(deCrypt(info.text, info.key));
    function deCrypt(_text, _key) {
        let result = "";
        for (let i = 0; i < _text.length; i++)
            result += String.fromCharCode(_text.charCodeAt(i) + _key);
        return result;
    }
})(LinterTest || (LinterTest = {}));
