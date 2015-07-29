function drawImage() {
    var targetCanvas = document.getElementById("canvas");
    var drawingCanvas = document.createElement('canvas');
    drawingCanvas.height = 275;
    drawingCanvas.width = 250

    var G_vmlCanvasManager;
    if (G_vmlCanvasManager != undefined) {
        G_vmlCanvasManager.initElement(drawingCanvas); //For excanvas.js to work with IE8-
    }
    var ctx = drawingCanvas.getContext("2d");

    // The text (H)
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(52.5, 0.0);
    ctx.lineTo(63.7, 0.0);
    ctx.lineTo(63.7, 11.0);
    ctx.lineTo(73.9, 11.0);
    ctx.lineTo(73.9, 0.0);
    ctx.lineTo(85.1, 0.0);
    ctx.lineTo(85.1, 33.4);
    ctx.lineTo(73.9, 33.4);
    ctx.lineTo(73.9, 22.2);
    ctx.lineTo(63.7, 22.2);
    ctx.lineTo(63.7, 33.4);
    ctx.lineTo(52.5, 33.4);
    ctx.lineTo(52.5, 0.0);
    ctx.closePath();
    ctx.fill();

    // The text (T)
    ctx.beginPath();
    ctx.moveTo(99.8, 11.1);
    ctx.lineTo(90.0, 11.1);
    ctx.lineTo(90.0, 0.0);
    ctx.lineTo(120.8, 0.0);
    ctx.lineTo(120.8, 11.1);
    ctx.lineTo(111.0, 11.1);
    ctx.lineTo(111.0, 33.4);
    ctx.lineTo(99.8, 33.4);
    ctx.lineTo(99.8, 11.1);
    ctx.closePath();
    ctx.fill();

    // The text (M)
    ctx.beginPath();
    ctx.moveTo(125.7, 0.0);
    ctx.lineTo(137.3, 0.0);
    ctx.lineTo(144.5, 11.8);
    ctx.lineTo(151.7, 0.0);
    ctx.lineTo(163.4, 0.0);
    ctx.lineTo(163.4, 33.4);
    ctx.lineTo(152.2, 33.4);
    ctx.lineTo(152.2, 16.9);
    ctx.lineTo(144.5, 28.8);
    ctx.lineTo(136.6, 16.9);
    ctx.lineTo(136.6, 33.4);
    ctx.lineTo(125.7, 33.4);
    ctx.lineTo(125.7, 0.0);
    ctx.closePath();
    ctx.fill();

    // The text (L)
    ctx.beginPath();
    ctx.moveTo(168.9, 0.0);
    ctx.lineTo(180.1, 0.0);
    ctx.lineTo(180.1, 22.4);
    ctx.lineTo(195.7, 22.4);
    ctx.lineTo(195.7, 33.4);
    ctx.lineTo(168.9, 33.4);
    ctx.lineTo(168.9, 0.0);
    ctx.closePath();
    ctx.fill();

    // Dark background
    ctx.fillStyle = "#E44D26";
    ctx.beginPath();
    ctx.moveTo(52.1, 228.2);
    ctx.lineTo(36.2, 48.7);
    ctx.lineTo(211.8, 48.7);
    ctx.lineTo(195.9, 228.2);
    ctx.lineTo(123.9, 248.0);
    ctx.closePath();
    ctx.fill();

    // Light background
    ctx.fillStyle = "#F16529";
    ctx.beginPath();
    ctx.moveTo(124.0, 232.6);
    ctx.lineTo(182.1, 216.6);
    ctx.lineTo(195.9, 63.4);
    ctx.lineTo(124.0, 63.4);
    ctx.closePath();
    ctx.fill();

    // Dark foreground
    ctx.fillStyle = "#EBEBEB";
    ctx.beginPath();
    ctx.moveTo(124.0, 129.9);
    ctx.lineTo(94.9, 129.9);
    ctx.lineTo(92.9, 107.4);
    ctx.lineTo(124.0, 107.4);
    ctx.lineTo(124.0, 85.4);
    ctx.lineTo(123.9, 85.4);
    ctx.lineTo(68.9, 85.4);
    ctx.lineTo(69.4, 91.3);
    ctx.lineTo(74.8, 151.9);
    ctx.lineTo(124.0, 151.9);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(124.0, 187.0);
    ctx.lineTo(123.9, 187.0);
    ctx.lineTo(99.4, 180.5);
    ctx.lineTo(97.8, 162.9);
    ctx.lineTo(85.9, 162.9);
    ctx.lineTo(75.8, 162.9);
    ctx.lineTo(78.8, 197.5);
    ctx.lineTo(123.9, 210.0);
    ctx.lineTo(124.0, 210.0);
    ctx.closePath();
    ctx.fill();

    // Light foreground
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(123.9, 129.9);
    ctx.lineTo(123.9, 151.9);
    ctx.lineTo(151.0, 151.9);
    ctx.lineTo(148.4, 180.5);
    ctx.lineTo(123.9, 187.0);
    ctx.lineTo(123.9, 210.0);
    ctx.lineTo(169.1, 197.5);
    ctx.lineTo(169.4, 193.8);
    ctx.lineTo(174.5, 135.8);
    ctx.lineTo(175.0, 129.9);
    ctx.lineTo(169.2, 129.9);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(123.9, 85.4);
    ctx.lineTo(123.9, 99.0);
    ctx.lineTo(123.9, 107.4);
    ctx.lineTo(123.9, 107.4);
    ctx.lineTo(177.0, 107.4);
    ctx.lineTo(177.0, 107.4);
    ctx.lineTo(177.0, 107.4);
    ctx.lineTo(177.5, 102.4);
    ctx.lineTo(178.5, 91.3);
    ctx.lineTo(179.1, 85.4);
    ctx.closePath();
    ctx.scale(0.2, 0.2);
    ctx.fill();

    targetCanvas.getContext("2d").drawImage(drawingCanvas, 0, 0, 90, 95);
}