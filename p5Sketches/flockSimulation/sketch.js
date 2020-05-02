class Boid {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
        this.r = 10;
        this.maxForce = 0.3;
        this.maxSpeed = 1;
    }


    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.acceleration.mult(0);
    }

    edges() {
        if (this.position.x > width) {
            this.position.x = 0
        } else if (this.position.x < 0) {
            this.position.x = width;
        }


        if (this.position.y > height) {
            this.position.y = 0
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }

    align(boids = []) {
        let steering = createVector();
        const perception = 100;
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
            steering.setMag(this.maxSpeed)
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }

        return steering;
    }

    flock(boids) {
        this.acceleration = this.align(boids);
    }

    show() {

        push();
        translate(this.position.x, this.position.y);
        let angle = this.velocity.heading();
        rotate(angle + PI / 2);
        triangle(
            - this.r / 3, this.r,
            0, - this.r,
            + this.r / 3, this.r
        );
        pop();

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

        boid.edges();
        boid.flock(flock);
        boid.show()
        boid.update();
    });

}
