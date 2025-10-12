
const demoEl = document.querySelector('#demo');

// Javascript Object.preventExtensions()
const person1 = { firstName: 'Thanh', lastName: 'Pham' };
Object.preventExtensions(person1);
person1.nationality = 'Vietnam';
demoEl.innerHTML = person1.nationality;

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
Object.preventExtensions(fruits1);

// Javascript Object.isExtensible() method
let isObjectExtensible = Object.isExtensible(person1);
let isArrayExtensible = Object.isExtensible(fruits1);
console.log(isObjectExtensible, isArrayExtensible);
