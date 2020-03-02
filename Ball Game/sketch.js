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

  decrement(n) {
    this.value = this.value - n;
  }
}
class Line {
  constructor(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.direction = 1;
  }
  draw() {
    fill(0)
    rect(this.x, this.y, this.width, this.height);
  }
  update() {
    this.y += this.direction;
  }


}



class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.diameter = 2 * r || 10;
    this.xDirection = 11;
    this.yDirection = 13;
  }



  draw() {
    let r = map(this.x, 0, width, 0, 255);
    // let g = map(this.y, 0, height, 0, 255);
    let b = map(this.x - this.y, 0, width - height, 0, 255)
    fill(r, r, b);
    stroke(b, r, r);
    background(50);
    //noFill()
    //noStroke()
    circle(this.x, this.y, this.diameter);
  }
  update() {
    this.x = this.x + this.xDirection
    this.y = this.y + this.yDirection
    if (this.x > width - this.diameter / 2 || this.x < this.diameter / 2) {
      this.xDirection *= -1;
    }
    if (this.y > height - this.diameter / 2 || this.y < this.diameter / 2) {
      this.yDirection *= -1;
    }

  }

  addText(s) {
    fill(0);
    text(s, this.x, this.y);
  }

}



let balls = [];
let lines = [];
let score = new Score();




function setup() {
  createCanvas(700, 585);
  textAlign(CENTER, CENTER);
  ball = new Ball(100, height - 20, 10);

  for (let i = 0; i < 1; i++) {
    balls.push(new Ball(random(10, width), random(10, height), 20));
  }
  for (let i = 0; i < 3; i++) {
    let x = random(i * 100, (i * 100) + 300);
    lines.push(new Line(x, x, 20, x));
  }

}

function draw() {



  //background(0);

  // if((mouseX>10&&mouseX<width)&&(mouseY>10&&mouseY<height)){
  //balls.forEach((ball, i) => {
  ball.draw();
  // ball.update();
  // ball.addText(i+1);    
  //});
  // }
  //background(0);
  if (keyIsDown(LEFT_ARROW)) {
    if (ball.x > ball.diameter / 2)
      ball.x = ball.x - 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (ball.x < width - ball.diameter / 2)
      ball.x = ball.x + 10;
  }

  lines.forEach((line, i) => {
    line.draw();
    if (line.y > height) {
     
      line.direction = line.direction + .1;
      let x = random(i * 100, (i * 100) + 300);
      line.x = x;
      line.y = 0;
      line.width = x;
      score.update();
      //line.draw(x,x,20,x);
       if (isBallIntersectingBricks(ball, lines)) {
        score.decrement(5);
      }  

      //line.y=0;
    }
    line.update();
  })

  score.show();

}

function isBallIntersectingBricks(ball, lines) {
  return lines.some(line => {
    return ball.y < line.y + line.height && ball.x >= line.x && ball.x <= line.x + line.width
    return false
  });

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

  console.log(keyCode);
}