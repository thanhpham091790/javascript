// Class inheritance
class Car1 {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return `I have a ${this.carname}`;
    }
}

class Model1 extends Car1 {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }

    show() {
        return `${this.present()}, and it is a ${this.model}.`;
    }
}

let myCar = new Model1('Toyota', 'Camry');
console.log(myCar.show());

// Getters and Setters
class Car2 {
    constructor(brand) {
        this.carname = brand;
    }
    get cname() {
        return this.carname;
    }

    set cname(name) {
        this.carname = name;
    }
}

const myCar2 = new Car2('Toyota');
console.log(myCar2.cname);
myCar2.cname = 'Lexus';
console.log(myCar2.cname);