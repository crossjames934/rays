const walls = [new Wall(200, 300, 350, 400)];

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
    walls[0].update();
}