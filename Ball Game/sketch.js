let balls = [];
let lines = [];
let score = new Score();
let image1y = 0;
let image2y = 0;
let appleImage;
let spaceShip;
let backgroundImage;
let timeElapsed;
const brickTypeChoices = [
	'enemy',
	'enemy',
	'enemy',
	'enemy',
	'enemy',
	'enemy',
	'friend',
	'friend',
	'friend',
	'friend',
	'family',
	'family',
];
const brickWidthChoices = [50, 75, 100, 175, 125, 150, 200, 225, 250]

function preload() {
	backgroundImage = loadImage('https://cdn.spacetelescope.org/archives/images/newsfeature/heic1909a.jpg');
	spaceShip = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhrXr8qkDvX5k5WrpdalvC2iiQiuh8kC3Plt0roB4y7SWjU44YYQ&s');
	appleImage = loadImage("./assets/apple.png")
	image2y = windowHeight;
}



function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	ball = new Ball(100, height - 20, 20);
	for (let i = 0; i < 10; i++) {
		lines[i] = createBrick();
	}
}

function createBrick() {
	const brickWidth = random(brickWidthChoices);
	const x = random(-windowWidth / 2, windowWidth);
	const y = random(-100, 200);
	return new Line(random(brickTypeChoices), x, y, 20, brickWidth);
}

function draw() {
	timeElapsed++;
	drawBackground();
	ball.draw();
	manageBallDirection();
	lines.forEach((line, i) => {
		line.draw();
		if (line.y > height) {
			if (line.speed < Line.MAX_SPEED)
				line.speed += Line.ACCELERATION;
			line.x = random(0, windowWidth);
			line.y = 0;
			line.width = random(brickWidthChoices);;
		}
		line.update();
	});
	updateScore();
}

function drawBackground() {
	background(50);
	image1y++;
	image(backgroundImage, 0, -windowHeight + image1y, windowWidth, windowHeight);
	image(backgroundImage, 0, image1y, windowWidth, windowHeight);
	image(backgroundImage, 0, image1y + windowHeight, windowWidth, windowHeight);
	if (image1y > windowHeight) {
		image1y = 0;
	}
}

function updateScore() {
	let idx = isBallIntersectingBricks(ball, lines);
	if (idx >= 0) {
		switch (lines[idx].type) {
			case 'enemy':
				score.updateValue(-5);
				break;
			case 'friend':
				score.updateValue(2);
				break;
			case 'family':
				score.updateValue(5);
				break;
		}
		lines[idx] = createBrick();
	}
	score.show();


}

function isBallIntersectingBricks(ball, lines) {
	for (let i = 0; i < lines.length; i++) {
		const ballTopX = ball.x;
		const ballTopY = ball.y - ball.diameter / 2;
		const ballRightX = ball.x + ball.diameter / 2
		const ballRightY = ball.y;
		const ballLeftX = ball.x - ball.diameter / 2
		const ballLeftY = ball.y;
		if (lines[i].y + lines[i].height > ballTopY) {
			if (ball.x > lines[i].x && ball.x < lines[i].x + lines[i].width) return i;
		}
	}
	return -1;
}

function manageBallDirection() {

	if (keyIsDown(LEFT_ARROW)) {
		if (ball.x > ball.diameter / 2) {
			ball.move(-5);
		}
	}
	if (keyIsDown(RIGHT_ARROW)) {
		if (ball.x < width - ball.diameter / 2) {
			ball.move(+5);
		}

	}
}
