class Clock {

    constructor(size, angle,color) {
        this.size = size
        this.angle = angle;
        this.value = 0;
        this.color=color;
    }
    show() {

        strokeWeight(10);
        stroke(this.color);
        arc(0, 0, this.size, this.size, 0, this.angle);
    }
}