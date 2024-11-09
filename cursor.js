var x = -15; 
var y = -15;
let bg = 0; 
let ellipseColor = 150;
let ellipseSize = 30;

function setup() {
    let canvas = createCanvas(windowWidth+100, windowHeight+100);
    canvas.position(-15, -15);
    canvas.style("z-index", 11);
}

function draw() {
    clear(); 
    x += (mouseX - x) * 0.10; 
    y += (mouseY - y) * 0.10; 

    noStroke();
    let ball = ellipse(x, y, ellipseSize, ellipseSize);
}

function adjustCavnas() {
    resizeCanvas(windowWidth, windowHeight);
}