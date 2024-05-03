let x = -15; 
let y = -15;
let bg = 0; 
let ellipseColor = 150;
let ellipseSize = 30;

function setup() {
    let canvas = createCanvas(3 * windowWidth, 3 * windowHeight);
    canvas.position(-15, -15);
    canvas.style("z-index", 3);
}

function draw() {
    clear(); 
    x += (mouseX - x) * 0.30; 
    y += (mouseY - y) * 0.30; 
    fill(ellipseColor, 40);
    stroke(ellipseColor);

    let ball = ellipse(x, y, ellipseSize, ellipseSize);
}

function adjustCavnas() {
    resizeCanvas(windowWidth, windowHeight);
}

