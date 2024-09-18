// via w3schools en zelf experimenteren
let webpage;

function testInnerHTML() {
    document.getElementById("test").innerHTML = "Test successful!";
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
