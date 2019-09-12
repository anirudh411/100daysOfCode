let seconds = new Clock(240, 1, '#BF360CE6');
let minute = new Clock(270, 1, '#1B5E20E6');
let hour = new Clock(300, 1, '#1A237EE6');
function setup() {
    createCanvas(1920, 800);
    angleMode(DEGREES);
}
function draw() {
    background(0);
    translate(800, 300);
    rotate(-90);
    noFill();
    showClocks();
    updateHands();
     let textTitle = `${hour.value.toString().length < 2 ? '0' + hour.value : hour.value} : ${minute.value.toString().length < 2 ? '0' + minute.value : minute.value} : ${seconds.value.toString().length < 2 ? '0' + seconds.value : seconds.value} `
     fill('#fff');
     noStroke();
     text(textTitle, -30, -200);

}
function showClocks() {
    if (seconds.value > 0) {
        seconds.show();
    }
    if (minute.value > 0) {
        minute.show();
    }
    if (hour.value > 0) {
        hour.show();
    }
}
setInterval(() => updateAngleAndValue(), 1000);

function updateAngleAndValue() {
    seconds.value++;
    if (seconds.value == 60) {
        minute.value++;
        seconds.value = 0;
    }
    if (minute.value == 60) {
        hour.value++;
        minute.value = 0;
    }
    if (hour.value == 12) {
        hour.value = 0;
    }
    seconds.angle = map(seconds.value, 0, 59, 1, 360);
    minute.angle = map(minute.value, 0, 59, 1, 360);
    hour.angle = map(hour.value, 0, 59, 1, 360);
}
function updateHands() {
    rotate(+90);
    fill(255);
    strokeWeight(4);
    push();
    rotate(seconds.angle);
    stroke(seconds.color);
    line(0, 0, 0, -110);
    pop();
    push();
    stroke(minute.color);
    rotate(minute.angle)
    line(0, 0, 0, -90);
    pop();
    push()
    stroke(hour.color);
    rotate(hour.angle)
    line(0, 0, 0, -70);
    pop();
    fill(0);
    stroke('fff');
    strokeWeight(8);
    point(0, 0);

}