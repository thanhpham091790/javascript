const person1 = {
    name: 'John',
    age: 30,
    city: 'New York'
};
document.querySelector('#demo').innerHTML = person1;

// Displaying the object properties by name
let text = `${person1.name}, ${person1.age}, ${person1.city}.`;
document.querySelector('#demo').innerHTML = text;
// Displaying the object properties in a loop
// Displaying the object using object.values()
// Displaying the object using JSON.stringify()
