console.log('connected!');

const demo = document.querySelector('#demo');
const fruits = ["Banana", "Orange", "Apple"];

// demo.innerHTML = Array.isArray(fruits);
demo.innerHTML = fruits instanceof Array;
