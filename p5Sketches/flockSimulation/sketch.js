class Boid {
    constructor(r = 10) {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
        this.r = r;
        this.maxForce = 0.1;
        this.maxSpeed = 3;
        this.angle = 0;
    }


    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.angle = this.velocity.heading() + PI / 2;
        this.angle = Number(this.angle.toFixed(2));
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

    cohesion(boids = []) {
        let steering = createVector();
        const perception = 100;
        let totalInPerception = 0;
        for (const otherBoid of boids) {
            const distance = dist(this.position.x, this.position.y, otherBoid.position.x, otherBoid.position.y);
            if (otherBoid != this && distance < perception) {
                steering.add(otherBoid.position);
                totalInPerception++;
            }
        }
        if (totalInPerception > 0) {
            steering.div(totalInPerception);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed)
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }

        return steering;
    }

    seperation(boids = []) {
        let steering = createVector();
        const perception = 100;
        let totalInPerception = 0;
        for (const otherBoid of boids) {
            const distance = dist(this.position.x, this.position.y, otherBoid.position.x, otherBoid.position.y);
            if (otherBoid != this && distance < perception) {
                let diff = p5.Vector.sub(this.position, otherBoid.position);
                diff.div(distance);
                steering.add(diff);
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
        this.acceleration.add(this.seperation(boids));
        this.acceleration.add(this.align(boids));
        this.acceleration.add(this.cohesion(boids));
    }

    show() {
        push();
        translate(this.position.x, this.position.y);
        rotate(this.angle);

        push();
        // rotate(-PI/2)
        fill('green');


        triangle(
            0, this.r / 2,
            -this.r * 1.5, this.r,
            0, this.r)

        triangle(
            0, this.r / 2,
            this.r * 1.5, this.r,
            0, this.r)

        pop();



        push();

        fill('darkblue');

        triangle(
            - this.r / 3, this.r,
            0, - this.r / 3,
            this.r / 3, this.r)




        triangle(- this.r / 3, this.r,
            0, this.r * 3,
            + this.r / 3, this.r
        )
        beginShape()
        vertex(0, -2);
        vertex(-10, 0);
        vertex(0, 4);

        pop();





        // vertex(- this.r / 3, this.r);
        // vertex(0, this.r * 3);
        // vertex(+ this.r / 3, this.r);

        // endShape(CLOSE);
        pop();

    }
}

const flock = []

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    for (let i = 0; i < 100; i++) {
        flock.push(new Boid(random(1,5)));
    }
}


function draw() {
    background('white');
    flock.forEach(boid => {
        noStroke();
        boid.edges();
        boid.flock(flock);
        boid.show()
        boid.update();

    });

    // noLoop();

}
