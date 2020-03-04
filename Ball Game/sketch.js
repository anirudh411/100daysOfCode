let balls = [];
let lines = [];
let score = new Score();
let image1y = 0;
let image2y = 0;
let spaceShip;
let backgroundImage;

function preload() {
	backgroundImage = loadImage('https://cdn.spacetelescope.org/archives/images/newsfeature/heic1909a.jpg');

	spaceShip = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhrXr8qkDvX5k5WrpdalvC2iiQiuh8kC3Plt0roB4y7SWjU44YYQ&s');

	image2y = windowHeight;

}


function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	ball = new Ball(100, height - 20, 10);
	for (let i = 0; i < 10; i++) {
		let x = random(100, width - 100);
		lines[i] = new Line(x, x, 20, x);
	}
	image(backgroundImage, 0, 0, windowWidth, windowHeight);

}

function draw() {
	drawBackground();
	ball.draw();
	manageBallMovement();
	if (lines.length < 3) {
		lines.push(new Line())
	}

	lines.forEach((line, i) => {
		line.draw();
		if (line.y > height) {
			line.direction = line.direction + .2;
			let x = random(i * 100, (i * 10) + 50);
			line.x = x;
			line.y = 0;
			line.width = x;
			score.update();
		}
		line.update();
	});

	let idx = isBallIntersectingBricks(ball, lines);
	if (idx >= 0) {
		score.decrement(5);
		//lines.push(new Line());
		lines[idx].y = 0;
	}

	score.show();
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

function isBallIntersectingBricks(ball, lines) {
	for (let i = 0; i < lines.length; i++) {
		let x1 = ball.x + ball.diameter / 2
		let y1 = ball.y - ball.diameter / 2;
		let x2 = lines[i].x + lines[i].width;
		let y2 = lines[i].y + lines[i].height;
		let x3 = lines[i].x;
		let y3 = lines[i].y;
		//console.log (x1>x3&&x1<x2,y1>y2&&y1<y3);

		if ((x1 > x3 && x1 < x2) && (y2 > y1 && y1 < y3)) return i


		//  if (((y1 - y2) < ball.diameter / 2) && abs((x1 - x2)) < ball.diameter/2) return i;

		//     let distance = abs(dist(ball.x, ball.y, x2, y2));
		//     //if (distance < lines[i].width / 2) return i;
		//     return -1


		//     let line = lines[i];
		//     let d = ((ball.y - line.y) < 1) && ball.x - line.x < line.width;
		//     if (d) {
		//       return i
		//     }
	}

	return -1;


	// return lines.some(line => {
	//   return ball.y < line.y + line.height && ball.x >= line.x && ball.x <= line.x + line.width
	//   return false
	// });

}

function keyPressed() {
	switch (keyCode) {
		case LEFT_ARROW:
			//  ball.x = ball.x - 20;

			break;
		case RIGHT_ARROW:
			//ball.x = ball.x + 20;

			break;
	}
}

function manageBallMovement() {
  
	if (keyIsDown(LEFT_ARROW)) {
		if (ball.x > ball.diameter / 2)
			ball.move(-5);
	}
	if (keyIsDown(RIGHT_ARROW)) {
		if (ball.x < width - ball.diameter / 2)
			ball.move(+5);

	}

}
