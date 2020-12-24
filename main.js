function setup() {
    createCanvas(1000, 800);
    background(0);
    angleMode(DEGREES);
    noStroke();
}

function draw() {
    background(0);
    fill(40, 40, 250);
    player.update();
    fill(255);
}