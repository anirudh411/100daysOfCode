const container = document.getElementById('canvas');
const width = container.offsetWidth;
let canvas;
const arrayElement = document.getElementById('arrayInput');
const array = arrayElement.value.split(",");
let boxArray = [];

function setup() {
    canvas = createCanvas(width, 100);
    canvas.parent('canvas');
    canvas.background(255);
}

function draw() {
    canvas.background(255);
    if (boxArray.length)
        showBoxes();
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

function showBoxes() {
    canvas.background(255);
    for (let i = 0; i < boxArray.length; i++) {
        boxArray[i].fillSquare();
        boxArray[i].showText(boxArray[i].squareX + (boxArray[i].size / 2), boxArray[i].squareY + boxArray[i].size / 2 + 6);
    }
}

function createArrayContainers(array) {
    const squareX = 70 + 30;
    const squareY = 30;
    const size = 50;
    const cornerRadius = 20;
    boxArray = [];
    if (array && array.length) {
        array.forEach((value, index) => {
            let box = new Square(squareX + (index * 60), squareY, cornerRadius, size, Number(value));
            boxArray.push(box);
        });
    }
}

function sortButtonClickHandler() {
    sortBoxes();
}

async function sortBoxes() {
    let length = boxArray.length, stop;
    for (let i = 0; i < length - 1; i++) {
        for (j = 0; j < length - i - 1; j++) {
            if (boxArray[j].value > boxArray[j + 1].value) {
                await swap(j, j + 1);
            }
        }
    }
    console.log(boxArray);
}

async function swap(first_Index, second_Index) {
    const tempValue = boxArray[first_Index];
    boxArray[first_Index] = boxArray[second_Index];
    boxArray[second_Index] = tempValue;

    let fistIndexPosition = boxArray[first_Index].squareX;
    let secondIndexPosition = boxArray[second_Index].squareX;

    while (boxArray[second_Index].squareX < fistIndexPosition) {
        boxArray[second_Index].fillSquare();
        boxArray[second_Index].squareX++;
        await sleep(1);
    }
    while (boxArray[first_Index].squareX > secondIndexPosition) {
        boxArray[first_Index].fillSquare();
        boxArray[first_Index].squareX--;
        await sleep(1);
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
