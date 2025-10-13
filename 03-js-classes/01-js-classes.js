// Javascript class syntax
function Car1(name, year) {
    const newCar = {};
    newCar.name = name;
    newCar.year = year
    return newCar;
}
const car1 = new Car1('Camry', '2017');
console.log(car1);

class Car2 {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}
const car2 = new Car2('Rav4', '2017');
console.log(car2, car2.age());