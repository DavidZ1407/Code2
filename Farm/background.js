"use strict";
var Farm;
(function (Farm) {
    class Background {
        static draw(ctx, canvas) {
            const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.6);
            skyGradient.addColorStop(0, "#87ceeb");
            skyGradient.addColorStop(1, "#aee1f9");
            ctx.fillStyle = skyGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height * 0.6);
            ctx.fillStyle = "yellow";
            ctx.beginPath();
            ctx.arc(120, 100, 50, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "white";
            const clouds = [
                { x: 300, y: 100 },
                { x: 600, y: 80 },
                { x: 900, y: 100 }
            ];
            for (let c of clouds) {
                ctx.beginPath();
                ctx.arc(c.x, c.y, 30, 0, Math.PI * 2);
                ctx.arc(c.x + 30, c.y + 10, 35, 0, Math.PI * 2);
                ctx.arc(c.x + 60, c.y + 20, 35, 0, Math.PI * 2);
                ctx.fill();
            }
            const grassGradient = ctx.createLinearGradient(0, canvas.height * 0.6, 0, canvas.height);
            grassGradient.addColorStop(0, "#3b8b3b");
            grassGradient.addColorStop(1, "#2f6b2f");
            ctx.fillStyle = grassGradient;
            ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4);
            ctx.fillStyle = "#cfa77f";
            const fenceY = canvas.height * 0.6 - 20;
            for (let i = 0; i < canvas.width; i += 60) {
                ctx.fillRect(i, fenceY, 20, 80);
            }
            ctx.fillRect(0, fenceY + 30, canvas.width, 10);
            ctx.fillRect(0, fenceY + 55, canvas.width, 10);
            const barnX = 1000;
            const barnY = canvas.height * 0.6 - 200;
            ctx.fillStyle = "#b23a48";
            ctx.fillRect(barnX, barnY, 250, 200);
            ctx.fillStyle = "#8b1e2b";
            ctx.beginPath();
            ctx.moveTo(barnX, barnY);
            ctx.lineTo(barnX + 125, barnY - 100);
            ctx.lineTo(barnX + 250, barnY);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = "#5e3023";
            ctx.fillRect(barnX + 90, barnY + 100, 70, 100);
            ctx.strokeStyle = "black";
            ctx.strokeRect(barnX + 90, barnY + 100, 70, 100);
        }
    }
    Farm.Background = Background;
})(Farm || (Farm = {}));
//# sourceMappingURL=background.js.map