namespace Canvas {

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;

    function handleLoad(_event: Event) {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "#3b1616ff";
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);



        for (let i = 0; i < 1; i++) {
            const centerX = Math.random() * canvas.width;
            const centerY = Math.random() * canvas.height;
            const radius = Math.random() * Math.min(canvas.width, canvas.height) / 2;


            drawCurvedLines(centerX, centerY, radius);
            drawShapes(centerX, centerY, radius);
            // window.setInterval()
        }

        function drawCurvedLines(centerX: number, centerY: number, radius: number) {
            for (let i = 0; i < 360; i += 2) {
                crc2.save();
                crc2.translate(centerX, centerY);
                crc2.rotate((i * Math.PI) / 180);
                crc2.translate(-centerX, -centerY);

                crc2.strokeStyle = "red";
                crc2.lineWidth = Math.random() * 30;


                crc2.beginPath();
                crc2.moveTo(centerX, centerY);
                crc2.bezierCurveTo(
                    centerX + radius, centerY,
                    centerX + radius, centerY + radius,
                    centerX, centerY + radius
                );
                crc2.stroke();

                crc2.restore();
            }
        }

        function drawShapes(centerX: number, centerY: number, radius: number) {
            for (let i = 0; i < 360; i += 2) {
                crc2.save();
                crc2.translate(centerX, centerY);
                crc2.rotate((i * Math.PI) / 180);
                crc2.translate(-centerX, -centerY);
                crc2.lineWidth = Math.random() * 15;

                if (i % 2 === 0) {

                    crc2.beginPath();
                    crc2.arc(centerX, centerY, radius, 100, 0 * Math.PI);
                    crc2.stroke();

                } else {

                    crc2.beginPath();
                    crc2.moveTo(centerX - radius, centerY);
                    crc2.lineTo(centerX + radius, centerY);
                    crc2.stroke();

                }

                crc2.restore();
            }
        }
    }

    function redraw(): void {
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

    }
}
