class WreckBall {
    constructor(x, y, radius) {
        var options = {
            'restitution': 0.2,
            'density': 4,
            'friction': 0.1
        };
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage('sprites/chromeball.png');
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
    }
}