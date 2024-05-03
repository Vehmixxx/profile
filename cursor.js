let x = 0; 
let y = 0;
let bg = 0; 
let ellipseColor = 140;
let ellipseSize = 50;

function setup() {
    let canvas = createCanvas(3 * windowWidth, 3 * windowHeight);
    canvas.position(-15, -15);
    canvas.style("z-index", 1);
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

