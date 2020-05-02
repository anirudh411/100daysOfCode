class Boid {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 5));
        this.acceleration = createVector();
        this.r = 10;
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.acceleration.mult(0);
    }

    align(boids = []) {
        let steering = createVector();
        const perception = 500;
        let totalInPerception = 0;
        for (const otherBoid of boids) {
            const distance = dist(this.position.x, this.position.y, otherBoid.position.x, otherBoid.position.y);
            if (otherBoid != this && distance < perception) {
                steering.add(otherBoid.velocity);
                totalInPerception++;
            }
        }
        if (totalInPerception > 0) {
            steering.div(totalInPerception);
            steering.sub(this.velocity);
        }

        return steering
    }

    flock(boids) {
        this.acceleration = this.align(boids);
    }

    show() {
        strokeWeight(16);
        stroke(255);
        triangle(
            this.position.x - this.r, this.position.y + this.r,
            this.position.x, this.position.y - this.r,
            this.position.x + this.r, this.position + this.r
        )
        // vertex(this.position.x, this.position.y - this.r * 2);
        // vertex(this.position.x - this.r, this.position + this.r * 2);
        // vertex(this.position.x + this.r, this.position + this.r * 2);
        //point(this.position.x, this.position.y);
    }
}

const flock = []

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    for (let i = 0; i < 100; i++) {
        flock.push(new Boid());
    }
}


function draw() {
    background(0);
    flock.forEach(boid => {
        //  boid.flock(flock);
        boid.show()
        //boid.update();
    });
}
