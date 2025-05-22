abstract class Shape {
    abstract getArea(): number;
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * (this.radius ** 2)
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle(7);
const rectangle = new Rectangle(5, 10);

console.log("Doira yuzi:", circle.getArea().toFixed(2));
console.log("Togri tortburchak yuzi:", rectangle.getArea());