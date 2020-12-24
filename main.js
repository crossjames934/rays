const wall = {
    x: 100,
    y: 100,
    w: 100,
    h: 50
}

function setup() {
    createCanvas(1000, 800);
    background(0);
    angleMode(DEGREES);
    noStroke();
}

function draw() {
    background(0);
    fill(40, 40, 250);
    rect(wall.x, wall.y, wall.w, wall.h);
    player.update();
    fill(255);

}