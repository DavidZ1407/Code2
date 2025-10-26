"use strict";
var CanvasAnimation;
(function (CanvasAnimation) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let background;
    const circles = [];
    const colors = [
        "#3399ff",
        "#ffffff",
        "#00f0ff",
        "#ff6ec7",
        "#ff0040",
        "#ae00ff",
        "#4c6ef5",
        "#6c8eff"
    ];
    function handleLoad() {
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#121212";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        background = crc2.getImageData(0, 0, canvas.width, canvas.height);
        const creatMoreCircles = 80;
        for (let i = 0; i < creatMoreCircles; i++) {
            const baseColor = randomColor();
            const pulseColor = randomColor();
            const circle = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                baseRadius: Math.random() * Math.min(canvas.width, canvas.height) / 4 + 30,
                pulseOffset: Math.random() * 10,
                pulseDirection: Math.random() < 0.5 ? 1 : -1,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() * 0.015) - 0.0075,
                baseColor,
                pulseColor
            };
            circles.push(circle);
        }
        requestAnimationFrame(animate);
    }
    function animate() {
        crc2.putImageData(background, 0, 0);
        for (const circle of circles) {
            updateCircle(circle);
            renderCircle(circle);
        }
        requestAnimationFrame(animate);
    }
    function updateCircle(circle) {
        circle.pulseOffset += 0.3 * circle.pulseDirection;
        if (circle.pulseOffset > 10 || circle.pulseOffset < -10)
            circle.pulseDirection *= -1;
        circle.rotation += circle.rotationSpeed;
    }
    function renderCircle(circle) {
        const currentRadius = circle.baseRadius + circle.pulseOffset;
        const blendValue = (Math.sin(Date.now() * 0.003) + 1) / 2;
        const color = blendColors(circle.baseColor, circle.pulseColor, blendValue);
        drawCurvedPattern(circle.x, circle.y, currentRadius, circle.rotation, color);
        drawLinePattern(circle.x, circle.y, currentRadius, circle.rotation, color);
    }
    function randomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    function blendColors(colorA, colorB, t) {
        const [r1, g1, b1] = hexToRGBArray(colorA);
        const [r2, g2, b2] = hexToRGBArray(colorB);
        const r = Math.round(r1 + (r2 - r1) * t);
        const g = Math.round(g1 + (g2 - g1) * t);
        const b = Math.round(b1 + (b2 - b1) * t);
        return `rgb(${r}, ${g}, ${b})`;
    }
    function hexToRGBArray(hexColor) {
        const hex = hexColor.startsWith("#") ? hexColor.slice(1) : hexColor;
        const value = parseInt(hex, 16);
        const red = (value >> 16) & 255;
        const green = (value >> 8) & 255;
        const blue = value & 255;
        return [red, green, blue];
    }
    function drawCurvedPattern(x, y, radius, rotation, color) {
        for (let angle = 0; angle < 360; angle += 12) {
            crc2.save();
            crc2.translate(x, y);
            crc2.rotate(((angle * Math.PI) / 180) + rotation);
            crc2.translate(-x, -y);
            crc2.strokeStyle = color;
            crc2.lineWidth = 2.5;
            crc2.globalAlpha = 0.8;
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.bezierCurveTo(x + radius * 0.8, y, x + radius, y + radius * 0.8, x, y + radius);
            crc2.stroke();
            crc2.restore();
        }
        crc2.globalAlpha = 1.0;
    }
    function drawLinePattern(x, y, radius, rotation, color) {
        for (let angle = 0; angle < 360; angle += 24) {
            crc2.save();
            crc2.translate(x, y);
            crc2.rotate(((angle * Math.PI) / 180) + rotation);
            crc2.translate(-x, -y);
            crc2.strokeStyle = color;
            crc2.lineWidth = 1.2;
            crc2.globalAlpha = 0.4;
            crc2.beginPath();
            crc2.moveTo(x - radius, y);
            crc2.lineTo(x + radius, y);
            crc2.stroke();
            crc2.restore();
        }
        crc2.globalAlpha = 1.0;
    }
})(CanvasAnimation || (CanvasAnimation = {}));
//# sourceMappingURL=canvas.js.map