class Player {
    constructor() {
        this.x = 50;
        this.y = 50;
        this.angle = 0;
        this.rays = this.prepareRays();
        this.view = '2D';
        this.speed = 2;
    }

    prepareRays = () => {
        const rays = [];
        const totalRays = 30;
        for (let i = 0; i < totalRays; i++) {
            rays.push(new Ray(i - (totalRays / 2)));
        }
        return rays;
    }

    update = () => {
        this.show();
        this.updateRays();
        this.controls();
    }

    show = () => {
        if (this.view === '3D') return this.ground3d();
        ellipse(this.x, this.y, 25);
    }

    ground3d = () => {
        const totalHeight = height / 2;
        const segments = 10;
        const segmentHeight = totalHeight / segments;
        for (let i = 0; i < segments; i++) {
            const alpha = i / segments * 255;
            fill(100, 50, 50, alpha);
            rect(0, height / 2 + segmentHeight * i, width, segmentHeight);
        }
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
            this.x += this.speed * cos(this.angle);
            this.y += this.speed * sin(this.angle);
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.x -= this.speed * cos(this.angle);
            this.y -= this.speed * sin(this.angle);
        }
        if (keyIsDown(50)) {
            this.view = '2D';
        }
        if (keyIsDown(51)) {
            this.view = '3D';
        }
    }
}

const player = new Player();