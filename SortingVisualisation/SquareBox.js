 class Square {
    constructor(x, y, cornerRadius, size, value) {
        this.squareX = x;
        this.squareY = y;
        this.size = size;
        this.value = value;
        this.cornerRadius = cornerRadius;
    }

    fillSquare() {
        let colorH = map(this.value, 0, 1000, 0, 255);
        let boxColor = color(100 - colorH, 100, 50);
        colorMode(HSB, 200);
        fill(boxColor);
        noStroke();
        square(this.squareX, this.squareY, this.size, this.cornerRadius);
    }
}

