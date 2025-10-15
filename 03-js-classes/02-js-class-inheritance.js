// Class inheritance
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return `I have a ${this.carname}`;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }

    show() {
        return `${this.present()}, and it is a ${this.model}.`;
    }
}

let myCar = new Model('Toyota', 'Camry');
console.log(myCar.show());