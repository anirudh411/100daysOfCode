class SpaceShip {
    constructor(x, y) {
        this.positon = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = random(1, 2);
        this.diameter = this.mass * 10;
        this.angle = 0
        this.aVelocity = 0.1;
        this.aAcc = 0.001;
        this.maxVelocity = 1;

    }

    display() {
        push();
        translate(this.positon.x, this.positon.y);
        rotate(this.angle);
        fill(255);
        triangle(-this.diameter, this.diameter, 0, -this.diameter, this.diameter, this.diameter);
        fill(111);
        //text(this.aVelocity, -this.diameter, 0);
        pop();
    }

    update() {
        this.velocity.add(this.acc);
        this.velocity.mult(0.991);
        this.velocity.limit(3);
        this.positon.add(this.velocity);
        // this.aAcc = this.acc.x / 10;
        // if (this.aVelocity < this.maxVelocity) {
        //     this.aVelocity += this.aAcc;
        // }
        // this.angle += this.aVelocity;
        this.acc.mult(0);

    }

    applyForce(force) {
        let f = p5.Vector.mult(force, this.mass);
        //  let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);

    }
}


class Mover {
    constructor(x, y) {

        this.positon = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = random(1, 2);
        this.diameter = this.mass * 10;
        this.angle = 0;
        this.aVelocity = 0.1;
        this.aAcc = 0.001;
        this.maxVelocity = 1;

    }

    display() {

        push();
        translate(this.positon.x, this.positon.y);
        rotate(this.velocity.heading());
        fill(255);
        triangle(-20, 20, 0, -20, 20, 20);
        rect(0, 0, this.diameter * 2, this.diameter);
        fill(111);
        //text(this.aVelocity, -this.diameter, 0);
        pop();
    }

    update() {

        this.velocity.add(this.acc);
        this.positon.add(this.velocity);
        this.aAcc = this.acc.x / 10;
        if (this.aVelocity < this.maxVelocity) {
            this.aVelocity += this.aAcc;
        }
        this.angle += this.aVelocity;
        this.acc.mult(0);

    }

    applyForce(force) {
        let f = p5.Vector.mult(force, this.mass);
        //  let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);

    }

    checkEdges() {
        if (this.positon.y > height) {
            this.positon.y = height;
            this.velocity = this.velocity.mult(-1);
        }
        // if (this.positon.y < 0) {
        //     this.positon.y = 0;
        //     this.velocity.y*= -1; 

        // }
    }
}


let movers;
let gravity;
let wind;
let spaceShip;
let thrust;

function setup() {
    createCanvas(400, 400);
    movers = Array.from({length: 1}, (e) => new Mover(random(20, width), height / 2));
    rectMode(CENTER);
    spaceShip = new SpaceShip(width / 2, height - 100);
    //mover = new Mover(width / 2, height / 2);
}

function draw() {
    // frameRate(1);
    background(0);
    gravity = createVector(.1, .4);
    wind = createVector(-.2, .3);

    // movers.forEach(mover => {
    //     mover.applyForce(gravity);
    //     //     mover.applyForce(wind);
    //     mover.update();
    //     mover.checkEdges();
    //     mover.display();
    // });
    spaceShip.display();
    if (keyIsDown(LEFT_ARROW)) {
        spaceShip.angle -= 0.1;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        spaceShip.angle += 0.1;
    }
    if (keyIsDown(90)) {
        background(255);
        thrust = createVector(cos(spaceShip.angle - PI / 2), sin(spaceShip.angle - PI / 2))
        thrust.mult(0.5);
        spaceShip.applyForce(thrust);
    }
    spaceShip.display();
    spaceShip.update();


    //noLoop();
}

function keyPressed() {
    switch (keyCode) {
        case LEFT_ARROW:
        case RIGHT_ARROW:
            break;

    }
}


