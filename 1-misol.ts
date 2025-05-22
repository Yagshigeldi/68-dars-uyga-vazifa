interface Vehicle {
    brand: string,
    model: string,
    year: number,
    start(): void
}

class Car implements Vehicle {
    brand: string;
    model: string;
    year: number;
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log(`${this.brand} ${this.model} ${this.year}`);
    }
}

const car1 = new Car("Chevrolet", "Gentra", 2020);
const car2 = new Car("Kia", "Kia Sonet", 2023);
const car3 = new Car("BMW", "Gran Lusso", 2025);

car1.start();
car2.start();
car3.start();