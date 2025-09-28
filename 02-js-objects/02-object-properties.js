// Accessing Javascript Properties
const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue'
}
let firstName = 'firstName';
let age = 'age';
console.log(`${person1.firstName} is ${person1.age} years old.`);
console.log(`${person1['firstName']} is ${person1['age']} years old.`);
console.log(`${person1[firstName]} is ${person1[age]} years old.`);

// Adding New Properties
person1.nationality = 'English';
console.log(person1['nationality']);

// Property default values
function Person1(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eye = eye;
    this.nationality = 'Vietnamese';
}
const myFather = new Person1('Tam', 'Pham', 60, 'brown');
const myMother = new Person1('Thao', 'Bui', 57, 'brown');
console.log(`My father is ${myFather.nationality}. My mother is ${myMother.nationality}.`);

// Deleting properties
const person2 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    age: 50,
    eyeColor: 'brown'
}
console.log(`${person2.firstName} is ${person2.age} years old.`);
delete person2.age;
console.log(`${person2.firstName} is ${person2.age} years old.`);
delete person2['eyeColor'];
console.log(`${person2.firstName}'s eye color is ${person2.eyeColor}`);

// Nested Objects
const person3 = {
    name: 'Thanh',
    age: 30,
    cars: {
        car1: 'Ford',
        car2: 'Toyota'
    }
}
console.log(`${person3.name}'s second car is ${person3.cars.car2}.`);
console.log(`${person3.name}'s second car is ${person3.cars['car2']}.`);
console.log(`${person3.name}'s second car is ${person3['cars']['car2']}.`);
const cars = 'cars';
const car2 = 'car2';
console.log(`${person3.name}'s second car is ${person3[cars][car2]}.`);

