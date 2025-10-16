// Javascript static methods
class Car {
    constructor(name) {
        this.name = name;
    }

    static hello() {
        return 'Hello';
    }
}

const myCar = new Car('Toyota');
console.log(Car.hello());
console.log(myCar.hello());