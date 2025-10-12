"use strict"
const demoEl = document.querySelector('#demo');

// Javascript Object.preventExtensions()
const person1 = { firstName: 'Thanh', lastName: 'Pham' };
Object.preventExtensions(person1);

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
Object.preventExtensions(fruits1);

// Javascript Object.isExtensible() method
let isObjectExtensible = Object.isExtensible(person1);
let isArrayExtensible = Object.isExtensible(fruits1);
console.log(isObjectExtensible, isArrayExtensible);

// Javascript Object.seal() method.
const person2 = { firstName: 'Thanh', lastName: 'Pham' };
Object.seal(person2);
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
Object.seal(fruits2);

// Javascript Object.isSeal() method.
let isPerson2Seal = Object.isSealed(person2);
let isFruits2Seal = Object.isSealed(fruits2);
console.log(isPerson2Seal, isFruits2Seal);

// Javascript Object.freeze() method
const person3 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
Object.freeze(person3)
let isPerson3Frozen = Object.isFrozen(person3);
console.log(isPerson3Frozen);