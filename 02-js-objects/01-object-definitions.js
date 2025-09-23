// Using an object literal
const person1 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    age: 35,
    eyeColor: 'brown'
}
console.log(`${person1.firstName} is ${person1.age} years old.`);

// Using the new keyword
const person2 = new Object({
    firstName: 'Thanh',
    lastName: 'Pham',
    age: 35,
    eyeColor: 'brown'
});
console.log(`${person2.firstName} is ${person2.age} years old.`);

// Using Object.fromEntries() method.
const fruits = [
    ['apple', 300],
    ['pears', 900],
    ['bananas', 500]
];
console.log(Object.fromEntries(fruits));

// Using Object.assign() method.
// Create a new object by copying properties from one or more source objects.
// If they have some common properties, the properties of later object will overwrite the properties of previous object.
const person3 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'brown'
}

const person4 = {
    firstName: 'Anne',
    lastName: 'Smith'
}
console.log(Object.assign(person3, person4));