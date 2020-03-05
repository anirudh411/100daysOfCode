class Line {
	constructor(type, x = 0, y = 0, height = 10, width = random(10, 100), ) {
		console.log(type);
		this.x = x;
		this.y = y;
		this.height = height;
		this.width = width;
		this.speed = 2;
		this.type = type;
	}

	draw() {
		let r;
		let b;
		let g;
		r = g = b = 0;
		if (this.type === 'enemy') r = 255;
		if (this.type === 'friend') g = 255;
		if (this.type === 'family') b = 255;
		fill(r, g, b);
		rect(this.x, this.y, this.width, this.height);
	}

	update() {
		//if (this.speed < 10) {
			this.y += this.speed;
		//}

	}


}
