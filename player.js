class Player {
    x = 50;
    y = 50;
    angle = 0;

    update() {
        this.mapShow();
        this.controls();
    }

    mapShow() {
        push();
        fill(255);
        translate(this.x, this.y);
        ellipse(0, 0, 25);
        rotate(this.angle);
        stroke(255, 0, 0);
        line(0, 0, 20, 0);
        pop();
    }

    checkers() {
        fill(255, 0, 0);
        // for (let i = 0; i < 100; i++) {
        //     const x = i * cos(this.angle);
        //     const y = i * sin(this.angle);
        //     ellipse(x, y, 3);
        // }
    }

    controls() {
        if (keyIsDown(LEFT_ARROW)) {
            this.angle--;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.angle++;
        }
        if (keyIsDown(UP_ARROW)) {
            this.x += cos(this.angle);
            this.y += sin(this.angle);
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.x -= cos(this.angle);
            this.y -= sin(this.angle);
        }
    }
}

const player = new Player();