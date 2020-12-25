const walls = [];

function setup() {
    createCanvas(1000, 800);
    background(0);
    angleMode(DEGREES);
    noStroke();
    walls.push(new Wall(200, 300, 350, 400));
    walls.push(new Wall(350, 400, 600, 150));
}

function draw() {
    background(0);
    fill(40, 40, 250);
    player.update();
    for (let i = 0; i < walls.length; i++) {
        walls[i].update();
    }
}