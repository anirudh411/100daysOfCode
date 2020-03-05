class Score {
	constructor() {
		this.value = 0
	}
	show() {
		textSize(32);
		fill(0, 102, 153);
		text("score :", 60, 20);
		text(this.value, 150, 20);
	}

	update() {
		this.value++;
	}

	updateValue(n) {
		this.value = this.value + n;
	}
}
