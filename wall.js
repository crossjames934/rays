class Wall {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    update = () => {
        this.show();
    }

    show = () => {
        const {x1, y1, x2, y2} = this;
        stroke(255);
        line(x1, y1, x2, y2);
        noStroke();
    }
}