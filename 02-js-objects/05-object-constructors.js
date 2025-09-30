// Object constructor functions
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myFather = new Person('Tam', 'Pham', 60, 'brown');
document.querySelector('#demo').innerHTML = `My father is ${myFather.age} years old.`;

// Property default values
function Person1(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = 'Vietnam';
}

const myFather1 = new Person1('Tam', 'Pham', 60, 'brown');
const myMother1 = new Person1('Thao', 'Bui', 57, 'brown');
document.querySelector('#demo').innerHTML = `My father is ${myFather1.age} years old, and my mother is ${myMother1.age} years old.`;

// Adding a property to an instant of object type.
function Person2(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myFather2 = new Person2('Tam', 'Pham', 60, 'brown');
myFather2.car = 'Honda';
document.querySelector('#demo').innerHTML = `My father car is ${myFather2.car}.`;

// Adding a property to a constructor
Person2.car = 'Honda';
Person2.prototype.car = 'Honda';
const myMother2 = new Person2('Thao', 'Bui', 57, 'brown');
document.querySelector('#demo').innerHTML = `My mother car is ${myMother2.car}.`;