class Square {
	constructor(x, y, cornerRadius, size, value) {
		this.squareX = x;
		this.squareY = y;
		this.size = size;
		this.value = value;
		this.cornerRadius = cornerRadius;
		this.isSorting = false;
	}

	fillSquare() {
		let colorH = map(this.value, 0, 1000, 0, 255);
		let boxColor = color(100 - colorH, 100, 50);
		colorMode(HSB, 100);
		fill(boxColor);
		square(this.squareX, this.squareY, this.size, this.cornerRadius);
	}

	updateSquare(x) {
		if (this.isSorting) {
			this.squareX = x;
		}


	}

	showText(x = this.squareX + (this.size / 2), y = this.squareY + this.size / 2 + 6) {
		textSize(12);
		textAlign(CENTER);
		fill(255);
		text(this.value, x, y);
	}
}

