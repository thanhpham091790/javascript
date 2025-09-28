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
