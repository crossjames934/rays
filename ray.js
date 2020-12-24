class Ray {
    constructor(angleOffset) {
        this.angleOffset = angleOffset;
        this.vect = p5.Vector.fromAngle(0);
    }

    show = () => {
        push();
        stroke(255, 0, 0);
        const visionLength = 100;
        translate(player.x, player.y);
        line(0, 0, this.vect.x * visionLength, this.vect.y * visionLength);
        noStroke();
        pop();
    }

    configurePosition = () => {
        const radAngle = radians(player.angle + this.angleOffset);
        this.vect = p5.Vector.fromAngle(radAngle);
    }

    update = () => {
        this.configurePosition();
        this.show();
    }
}