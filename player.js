class Player {
    constructor() {
        this.x = 50;
        this.y = 50;
        this.angle = 0;
        this.rays = this.prepareRays();
    }

    prepareRays = () => {
        const rays = [];
        for (let i = 0; i < 20; i++) {
            rays.push(new Ray(i));
        }
        return rays;
    }

    update = () => {
        this.mapShow();
        this.updateRays();
        this.controls();
    }

    mapShow = () => {
        ellipse(this.x, this.y, 25);
    }

    updateRays = () => {
        for (let i = 0; i < this.rays.length; i++) {
            this.rays[i].update();
        }
    }

    controls = () => {
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