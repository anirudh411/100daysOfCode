function setup() {
    let container = document.getElementById('canvas');
    let width = container.offsetWidth;
    let canvas = createCanvas(width, 100);
    background(153);
    canvas.parent('canvas');
}

function windowResized() {
    setup();
    buttonCLickHandler();
}

function buttonCLickHandler(event) {
    const arrayElement = document.getElementById('arrayInput');
    const array = arrayElement.value.split(",");
    createArrayContainers(array);

}

function createArrayContainers(array) {
    const squareX = 70 + 30;
    const squareY = 30;
    const size = 50;
    const cornerRadius = 20;
    array.forEach((value, index) => {
        let box = new Square(squareX + (index * 60), squareY, cornerRadius, size, value);
        box.fillSquare();
        textSize(12);
        textAlign(CENTER);
        fill(255);
        text(value, squareX + (size / 2) + (index * 60), squareY + size / 2 + 6);
    });
}
