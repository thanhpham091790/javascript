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

// Using fromEntries()
const fruits = [
    ['apple', 300],
    ['pears', 900],
    ['bananas', 500]
];
console.log(Object.fromEntries(fruits));