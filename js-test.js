// via w3schools en zelf experimenteren
let webpage;

function testInnerHTML() {
    document.getElementById("test-paragraph").innerHTML = "Test successful!";
}

function testAlert() {
    alert("Test successful!");
}

function testConsoleLog() {
    console.log("Test successful!");
}

function testRickRoll() {
    webpage = window.open("index.html");
}

function testWindowClose() {
    if (webpage && !webpage.closed) {
        webpage.close();
    }
}

function testForLoop() {
    for (let i = 1; i <= 5; i++) {
        console.log('*'.repeat(i));
    }

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
            console.log(i, j)
        }
    }
}

function testDraggable() {
    let dragdiv = document.getElementById('test-draggable-div')
    dragdiv.draggable = !dragdiv.draggable;
    let dragbool = dragdiv.draggable
    document.getElementById('test-draggable-bool').innerHTML =
        dragbool ? "Draggable" : "Not draggable";
}

function testParams(color) {
    let colordiv = document.getElementById('test-color')
    switch (color) {
        case 'red':
            colordiv.style.backgroundColor = "#FF0000";
            break;
        case 'orange':
            colordiv.style.backgroundColor = "#FFAA00";
            break;
        case 'green':
            colordiv.style.backgroundColor = "#00FF00";
            break;
        default:
            break;
    }
}