namespace Transform {
    document.addEventListener("DOMContentLoaded", handleLoad);

    function handleLoad(_event: Event): void {
        const canvas = document.querySelector("canvas") as HTMLCanvasElement;
        const crc2 = canvas.getContext("2d") as CanvasRenderingContext2D;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawTransformation(crc2);

    }

    function drawTransformation(_crc2: CanvasRenderingContext2D): void {
        _crc2.fillStyle = "#3399ff";
        _crc2.fillRect(0, 0, _crc2.canvas.width, _crc2.canvas.height);
        drawCoordinateSystem(_crc2, "#ffffff");
        _crc2.save()
        _crc2.transform(1, 0, 0, 1, 200, 200)
        drawCoordinateSystem(_crc2, "#000000")
        console.log("Transform: ", _crc2.getTransform())
        _crc2.restore()

        _crc2.save()
        _crc2.translate(0, 200)
        drawCoordinateSystem(_crc2, "#ff0040")
        console.log("Translate: ", _crc2.getTransform())
        _crc2.restore()

        _crc2.save()
        _crc2.translate(600, 220)
        _crc2.rotate(Math.PI)
        drawCoordinateSystem(_crc2, "#ae00ff")
        console.log("Translate and Rotate: ", _crc2.getTransform())
        _crc2.restore()

        _crc2.save()
        _crc2.translate(600, 200)
        _crc2.scale(2, 2)
        drawCoordinateSystem(_crc2, "#00f0ff")
        console.log("Translate and Scale: ", _crc2.getTransform())
        _crc2.restore()

    }

    function drawCoordinateSystem(_crc2: CanvasRenderingContext2D, _color: string): void {
        _crc2.beginPath();
        _crc2.strokeStyle = _color;
        _crc2.lineWidth = 3;
        _crc2.moveTo(0, 10);
        _crc2.lineTo(200, 10);
        _crc2.lineTo(200, 10);
        _crc2.moveTo(10, 0);
        _crc2.lineTo(10, 200);
        _crc2.lineTo(10, 200);
        _crc2.stroke();

        for (let i = 0; i < 10; i++) {
            _crc2.beginPath();
            _crc2.moveTo(10 + i * 20, 10);
            _crc2.lineTo(10 + i * 20, 20);
            _crc2.stroke();
        }

        for (let i = 0; i < 10; i++) {
            _crc2.beginPath();
            _crc2.moveTo(10, 10 + i * 20);
            _crc2.lineTo(20, 10 + i * 20);
            _crc2.stroke();
        }
    }
}

