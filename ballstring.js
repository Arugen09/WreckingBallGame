class String {
    constructor(point, body, length) {
        var options = {
            bodyA: body,
            pointB: point,
            stiffness: 2,
            length: length
        };
        this.pointB = point;
        this.line = Constraint.create(options);
        World.add(world, this.line);
    };
    display() {
        if (this.line.bodyA) {
            var pointA = this.line.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            fill("black");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}