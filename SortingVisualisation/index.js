const container = document.getElementById('canvas');
//const resultContainer = document.getElementById('canvas_result');
const width = container.offsetWidth;
let canvas;
const arrayElement = document.getElementById('arrayInput');
const array = arrayElement.value.split(",");
let boxArray = [];

function setup() {
    canvas = createCanvas(width, 100);
    canvas.parent('canvas');
    canvas.background(0);
}

function draw() {
    canvas.background(0);
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
    canvas.clear();
    canvas.background(0);
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
            let box = new Square(squareX + (index * 60), squareY, cornerRadius, size, value);
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
                swap(boxArray, j, j + 1);
            }
        }
    }
}

function swap(arr, first_Index, second_Index) {
    const tempValue = arr[first_Index].value;
    arr[first_Index].value = arr[second_Index].value;
    arr[second_Index].value = tempValue;
}
