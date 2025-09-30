const person1 = {
    name: 'John',
    age: 30,
    city: 'New York'
};
document.querySelector('#demo').innerHTML = person1;

// Displaying the object properties by name
let text1 = `${person1.name}, ${person1.age}, ${person1.city}.`;
document.querySelector('#demo').innerHTML = text1;

// Displaying the object properties in a loop
let text2 = '';
for (let x in person1) {
    text2 += person1[x] + ' ';
}
document.querySelector('#demo').innerHTML = text2;

// Displaying the object using Object.values() method.
const values = Object.values(person1);
let text3 = values.toString();
document.querySelector('#demo').innerHTML = text3;

// Displaying the object using Object.entries() method.
let text4 = '';
for (let [key, value] of Object.entries(person1)) {
    text4 += value + ' ';
}
document.querySelector('#demo').innerHTML = text4;

// Displaying the object using JSON.stringify()
let text5 = JSON.stringify(person1);
document.querySelector('#demo').innerHTML = text5;
