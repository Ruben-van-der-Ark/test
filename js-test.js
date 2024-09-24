// via w3schools en zelf experimenteren
let webpage;

// test voor element.innerHTML
function testInnerHTML() {
    document.getElementById("test-paragraph").innerHTML = "Test successful!";
}

// test voor alert()
function testAlert() {
    alert("Test successful!");
}

// test voor console.log()
function testConsoleLog() {
    console.log("Test successful!");
}

// twee tests voor het openen en sluiten van websites
// open website
function testRickRoll() {
    webpage = window.open("index.html");
}
// sluit geopende website
function testWindowClose() {
    // als de website is geïnitialiseerd en niet al is gesloten
    if (webpage && !webpage.closed) {
        webpage.close();
    }
}

// test voor for loop
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

// test voor .draggable
function testDraggable() {
    let dragdiv = document.getElementById('test-draggable-div');
    dragdiv.draggable = !dragdiv.draggable;
    let dragbool = dragdiv.draggable;
    document.getElementById('out-draggable').innerHTML =
        // ternary operator: bool ? valIfTrue : valIfFalse
        dragbool ? "Draggable" : "Not draggable";
}

// check of twee inputs gelijk zijn in een paragraph
function testEqualInputs() {
    let input1 = document.getElementById("test-equal-input1");
    let input2 = document.getElementById("test-equal-input2");
    document.getElementById('out-equal-inputs').innerHTML =
        // ternary operator: bool ? valIfTrue : valIfFalse
        input1.value === input2.value ? "Equal" : "Not equal";
}

// schrijf de lengte van een input op in een paragraph
function testInputLength() {
    let input = document.getElementById("test-input-length");
    document.getElementById("out-input-length").innerHTML =
        input.value.length;
}

// een functie om de kleur van een element aan te passen
function testColor(color) {
    let colordiv = document.getElementById('test-color')

    // optie 1
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
            colordiv.style.backgroundColor = "#999999";
            break;
    }

    // // optie 2
    // let colors = {'red': "#FF0000", 'orange': "#FFAA00", 'green': "#00FF00"};
    // // the color inputted if it is in the colors dict above, or gray otherwise
    // colordiv.style.backgroundColor = color in colors ? colors[color] : '#999999';
}
