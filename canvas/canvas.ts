namespace CanvasAnimation {
    window.addEventListener("load", handleLoad);

    let crc2: CanvasRenderingContext2D;
    let shapes: AnimatedShape[] = [];

    interface AnimatedShape {
        x: number;
        y: number;
        z: number;
        zSpeed: number;
        baseRadius: number;
        pulseOffset: number;
        pulseDirection: number;
        rotation: number;
        rotationSpeed: number;
        baseColor: string;
        pulseColor: string;
        shapeType: "circle" | "wave" | "ring";
    }

    const colors = [
        "#3399ff", "#ffffff", "#00f0ff", "#ff6ec7",
        "#ff0040", "#ae00ff", "#4c6ef5", "#6c8eff"
    ];

    function handleLoad(): void {
        const canvas = document.querySelector("canvas");
        if (!canvas) return;
        crc2 = canvas.getContext("2d") as CanvasRenderingContext2D;

        const totalShapes = 100;
        for (let i = 0; i < totalShapes; i++) {
            shapes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random(),
                zSpeed: (Math.random() * 0.002 + 0.001) * (Math.random() < 0.5 ? 1 : -1),
                baseRadius: Math.random() * Math.min(canvas.width, canvas.height) / 4 + 20,
                pulseOffset: Math.random() * 15,
                pulseDirection: Math.random() < 0.5 ? 1 : -1,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() * 0.01) - 0.005,
                baseColor: randomColor(),
                pulseColor: randomColor(),
                shapeType: randomShapeType()
            });
        }

        requestAnimationFrame(animate);
    }

    function animate(): void {
        crc2.fillStyle = "rgba(18, 18, 18, 0.15)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (const shape of shapes) {
            updateShape(shape);
            renderShape(shape);
        }

        requestAnimationFrame(animate);
    }

    function updateShape(shape: AnimatedShape): void {
        shape.pulseOffset += 0.3 * shape.pulseDirection;
        if (shape.pulseOffset > 12 || shape.pulseOffset < -12)
            shape.pulseDirection *= -1;
        shape.rotation += shape.rotationSpeed;


        shape.x += Math.sin(Date.now() * 0.0005 + shape.z * 5) * 0.3;
        shape.y += Math.cos(Date.now() * 0.0005 + shape.z * 5) * 0.3;


        shape.z += shape.zSpeed;
        if (shape.z > 1) shape.z = 1;
        if (shape.z < 0) shape.z = 0;

        if (shape.z >= 1 || shape.z <= 0) shape.zSpeed *= -1;
    }

    function renderShape(shape: AnimatedShape): void {
        const perspective = 1 - shape.z * 0.7;
        const radius = (shape.baseRadius + shape.pulseOffset) * perspective;
        const posX = (shape.x - crc2.canvas.width / 2) * perspective + crc2.canvas.width / 2;
        const posY = (shape.y - crc2.canvas.height / 2) * perspective + crc2.canvas.height / 2;
        const alpha = 0.8 * perspective;

        crc2.globalAlpha = alpha;

        const blend = (Math.sin(Date.now() * 0.002 + shape.z) + 1) / 2;
        const color = blendColors(shape.baseColor, shape.pulseColor, blend);

        switch (shape.shapeType) {
            case "circle":
                drawCurvedPattern(posX, posY, radius, shape.rotation, color);
                break;
            case "wave":
                drawWavePattern(posX, posY, radius, shape.rotation, color);
                break;
            case "ring":
                drawRings(posX, posY, radius, shape.rotation, color);
                break;
        }

        crc2.globalAlpha = 1;
    }

    function randomShapeType(): AnimatedShape["shapeType"] {
        const types: AnimatedShape["shapeType"][] = ["circle", "wave", "ring"];
        return types[Math.floor(Math.random() * types.length)];
    }

    function randomColor(): string {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function blendColors(colorA: string, colorB: string, t: number): string {
        const [r1, g1, b1] = hexToRGB(colorA);
        const [r2, g2, b2] = hexToRGB(colorB);
        const r = Math.round(r1 + (r2 - r1) * t);
        const g = Math.round(g1 + (g2 - g1) * t);
        const b = Math.round(b1 + (b2 - b1) * t);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function hexToRGB(hex: string): [number, number, number] {
        const clean = hex.startsWith("#") ? hex.slice(1) : hex;
        const val = parseInt(clean, 16);
        return [(val >> 16) & 255, (val >> 8) & 255, val & 255];
    }

    function drawCurvedPattern(x: number, y: number, r: number, rotation: number, color: string): void {
        for (let a = 0; a < 360; a += 18) {
            crc2.save();
            crc2.translate(x, y);
            crc2.rotate((a * Math.PI / 180) + rotation);
            crc2.translate(-x, -y);
            crc2.strokeStyle = color;
            crc2.lineWidth = 1.8 * r / 100;
            crc2.globalAlpha = 0.7 * r / 100;
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.bezierCurveTo(x + r * 0.5, y - r * 0.4, x + r, y + r * 0.3, x, y + r);
            crc2.stroke();
            crc2.restore();
        }
        crc2.globalAlpha = 1;
    }

    function drawWavePattern(x: number, y: number, r: number, rotation: number, color: string): void {
        crc2.save();
        crc2.translate(x, y);
        crc2.rotate(rotation);
        crc2.strokeStyle = color;
        crc2.lineWidth = 1.4 * r / 100;
        crc2.globalAlpha = 0.6 * r / 100;
        crc2.beginPath();
        for (let i = -r; i < r; i += 10) {
            const waveY = Math.sin(i / 15 + rotation * 5) * 10;
            crc2.lineTo(i, waveY);
        }
        crc2.stroke();
        crc2.restore();
        crc2.globalAlpha = 1;
    }

    function drawRings(x: number, y: number, r: number, rotation: number, color: string): void {
        crc2.save();
        crc2.translate(x, y);
        crc2.rotate(rotation);
        for (let i = 0; i < 3; i++) {
            crc2.beginPath();
            crc2.arc(0, 0, r * (0.5 + i * 0.25), 0, Math.PI * 2);
            crc2.strokeStyle = color;
            crc2.lineWidth = 0.8 * r / 100;
            crc2.globalAlpha = 0.3 + i * 0.2;
            crc2.stroke();
        }
        crc2.restore();
        crc2.globalAlpha = 1;
    }
}
