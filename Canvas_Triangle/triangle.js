"use strict";
var Triangle;
(function (Triangle) {
    document.addEventListener("DOMContentLoaded", hndlLoad);
    function hndlLoad(_event) {
        draw();
    }
    function draw() {
        const canvas = document.querySelector("canvas");
        const crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        crc2.fillStyle = "#000000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        const radiusString = prompt("Enter radius: ", "150");
        const nrSegmentsString = prompt("Enter number of Segments: ", "15");
        if (radiusString !== null && nrSegmentsString !== null) {
            const radius = parseInt(radiusString);
            const segments = parseInt(nrSegmentsString);
            const center = { x: canvas.width / 2, y: canvas.height / 2 };
            drawTriangleFan(crc2, radius, segments, center);
        }
        else {
            alert("Enter a Valid number");
        }
    }
    function drawTriangle(_crc2, _p1, _p2, _p3, _color) {
        _crc2.beginPath();
        _crc2.fillStyle = _color;
        _crc2.moveTo(_p1.x, _p1.y);
        _crc2.lineTo(_p2.x, _p2.y);
        _crc2.lineTo(_p3.x, _p3.y);
        _crc2.lineTo(_p1.x, _p1.y);
        _crc2.closePath();
        _crc2.fill();
    }
    function drawTriangleFan(_crc2, _radius, _nrOfFans, _center) {
        const radiusSlice = (2 * Math.PI) / _nrOfFans;
        for (let i = 0; i < _nrOfFans; i++) {
            const startP2 = { x: 0, y: -_radius };
            const rotatedP2 = rotatePoint(startP2, radiusSlice * i);
            const startP3 = { x: 0, y: -_radius };
            const rotatedP3 = rotatePoint(startP3, radiusSlice + radiusSlice * i);
            const p2 = moveVec2(rotatedP2, _center);
            const p3 = moveVec2(rotatedP3, _center);
            drawTriangle(_crc2, _center, p2, p3, "#ae00ff");
        }
    }
    function rotatePoint(_p1, _rotation) {
        let tmpVec2 = { x: 0, y: 0 };
        tmpVec2.x = (Math.cos(_rotation) * _p1.x) - (Math.sin(_rotation) * _p1.y);
        tmpVec2.y = (Math.sin(_rotation) * _p1.x) + (Math.cos(_rotation) * _p1.y);
        return tmpVec2;
    }
    function moveVec2(_v1, _p1) {
        let tmpVec = { x: 0, y: 0 };
        tmpVec.x = _v1.x + _p1.x;
        tmpVec.y = _v1.y + _p1.y;
        return tmpVec;
    }
})(Triangle || (Triangle = {}));
//# sourceMappingURL=triangle.js.map