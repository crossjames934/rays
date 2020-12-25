const visionLength = 300;

class Ray {
    constructor(angleOffset) {
        this.angleOffset = angleOffset;
        this.vect = p5.Vector.fromAngle(0);
        this.lineEndX = 0;
        this.lineEndY = 0;
        this.intersection = null;
    }

    show = () => {
        if (player.view === '3D') return this.show3D();
        push();
        stroke(255, 0, 0);
        translate(player.x, player.y);
        line(0, 0, this.lineEndX, this.lineEndY);
        noStroke();
        pop();
    }

    show3D = () => {
        if (this.intersection === null) return;
        const distance = dist(0, 0, this.intersection.x, this.intersection.y);
        const wallHeight = map(distance, 0, visionLength, height, 0);
        const wallWidth = (this.angleOffset + 15) / 30;
        const xPosition = wallWidth * width;
        const segmentWidth = 1 / 30 * width;
        const brightness = map(distance, 0, visionLength, 255, 0);
        fill(brightness);
        rectMode(CENTER);
        rect(xPosition, height / 2, segmentWidth, wallHeight);
        rectMode(CORNER);
    }

    configurePosition = () => {
        const radAngle = radians(player.angle + this.angleOffset);
        this.vect = p5.Vector.fromAngle(radAngle);
    }

    update = () => {
        this.configurePosition();
        this.checkWalls();
        this.show();
    }

    checkWalls = () => {
        for (let i = 0; i < walls.length; i++) {
            const intersection = this.getIntersection(walls[i]);
            this.intersection = intersection;
            if (intersection === null) {
                this.lineEndX = this.vect.x * visionLength;
                this.lineEndY = this.vect.y * visionLength;
            } else {
                this.lineEndX = intersection.x;
                this.lineEndY = intersection.y;
                break;
            }
        }
    }

    getIntersection = (wall) => {
        const distanceFirst = dist(player.x, player.y, wall.x1, wall.y1);
        const distanceSecond = dist(player.x, player.y, wall.x2, wall.y2);
        if (distanceFirst > visionLength && distanceSecond > visionLength) return null;
        const {x1, y1, x2, y2} = wall;
        const x3 = player.x;
        const y3 = player.y;
        const x4 = x3 + this.vect.x * visionLength;
        const y4 = y3 + this.vect.y * visionLength;
        const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (denominator === 0) return null;
        const tNumerator = (x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4);
        const t = tNumerator / denominator;
        const uNumerator = (x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3);
        const u = - (uNumerator / denominator);
        const isHitting = t >= 0 && t <= 1 && u >= 0 && u <= 1;
        if (!isHitting) return null;
        const intersectionX = x1 + (t * (x2 - x1));
        const intersectionY = y1 + (t * (y2 - y1));
        return {x: intersectionX - player.x, y: intersectionY - player.y};
    }
}