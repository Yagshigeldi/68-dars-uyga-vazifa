var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("".concat(this.brand, " ").concat(this.model, " ").concat(this.year));
    };
    return Car;
}());
var car1 = new Car("Chevrolet", "Gentra", 2020);
var car2 = new Car("Kia", "Kia Sonet", 2023);
var car3 = new Car("BMW", "Gran Lusso", 2025);
car1.start();
car2.start();
car3.start();