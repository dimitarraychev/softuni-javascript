class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointA, pointB) {
        return Math.sqrt((pointB.x - pointA.x) ** 2 + (pointB.y - pointA.y) ** 2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));