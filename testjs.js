// via w3schools en zelf expirimenteren
function testInnerHTML(){
    document.getElementById("test").innerHTML = "Test successful!";
}

function testAlert() {
    alert("Test successful!");
}

function testConsoleLog() {
    console.log("Test successful!");
}

function testRickRoll() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}

function testForLoop() {
    for (let i=1; i<=5; i++) {
        console.log('*'.repeat(i));
    }

    for (let i=1; i<=5; i++) {
        for (let j=1; j<=5; j++) {
            console.log(i, j)
        }
    }
}