class Mover {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = random(1, 2);
        this.diameter = this.mass * 10;
        this.angle = 0
        this.aVelocity = 0.05;
        this.aAcc = 0.001;
        this.maxVelocity = 1;
        this.amplitude = this.position.x;
        this.period = 120;
    }

    display() {
        // push();
        translate(width / 2, this.position.y);
        ellipse(this.position.x, 0, this.diameter, this.diameter)
        // pop();
    }

    update() {
        this.angle += this.aVelocity;
        this.position.x = this.amplitude * cos(this.angle);
        //..this.position.y = this.amplitude * sin(TWO_PI * frameCount / this.period);
    }

}

let circle;




class Pendulum {
    constructor(stringLength = 10, bobWeight = 10) {
        this.length = stringLength;
        this.diameter = bobWeight * 2;
        this.origin = createVector(width / 2, 0);
        this.bob = createVector(width / 2, this.length);
        this.angle = -PI / 2;
        this.aVel = 0;
        this.aAcc = 0;
    }

    draw() {
        line(this.origin.x, this.origin.y, this.bob.x, this.bob.y);
        ellipse(this.bob.x, this.bob.y, this.diameter);
    }

    display() {
        this.calculateBobPosition();
        this.calculateAngularVelocity();
        this.draw();


    }
    calculateBobPosition() {
        this.bob.x = this.length * sin(this.angle);
        this.bob.y = this.length * cos(this.angle);
        this.bob.add(this.origin);
    }
    calculateAngularVelocity() {

        this.acc = -0.03 * sin(this.angle);
        this.aVel = this.aVel + this.acc;
        this.angle = this.angle + this.aVel;
        this.aVel = this.aVel * 0.99;
    }
}

let pendulum;
function setup() {
    createCanvas(400, 400);
    //circle = new Mover(width / 2, height / 2);
    pendulum = new Pendulum(200, 20);


}

function draw() {
    background(255);
    pendulum.display();

    // circle.update();
    // circle.display();

}

class Oscillator {
    constructor() {
        this.angle = 0;
        this.vel
    }


}