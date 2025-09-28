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
