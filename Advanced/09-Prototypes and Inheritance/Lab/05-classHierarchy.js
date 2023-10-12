// function classHierarchy() {

class Figure {
    constructor() {
        this.units = 'cm';
    }

    get area() {
        return;
    }

    changeUnits(units) {
        return this.units = units;
    }

    toString() {
        return `Figures units: ${this.units}`;
    }
}

class Circle extends Figure {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    get area() {
        if (this.units === "mm") return Math.PI * this.radius * this.radius * 100;
        if (this.units === "m") return Math.PI * this.radius * this.radius / 0.001;
        return Math.PI * this.radius * this.radius;
    }

    toString() {
        let radius = this.radius;
        if (this.units === "mm") radius *= 10;
        if (this.units === "m") radius *= 0.01;
        return `${super.toString()} Area: ${this.area} - radius: ${radius}`;
    }
}

class Rectangle extends Figure {
    constructor(width, heigth, units) {
        super();
        this.width = width;
        this.heigth = heigth;
        this.units = units;
    }

    get area() {
        if (this.units === "mm") return this.width * this.heigth * 100;
        if (this.units === "m") return this.width * this.heigth / 0.001;
        return this.width * this.heigth;
    }

    toString() {
        let width = this.width
        let heigth = this.heigth;

        if (this.units === "mm") {
            width *= 10;
            heigth *= 10;
        }
        if (this.units === "m") {
            width *= 0.01;
            heigth *= 0.01;
        }
        return `${super.toString()} Area: ${this.area} - width: ${width}, height: ${heigth}`;
    }
}

//     return {
//         Figure,
//         Circle,
//         Rectangle
//     };
// }

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50