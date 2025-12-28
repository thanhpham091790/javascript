
const demo = document.querySelector('#demo');

const fruits = ["Apple", "Orange", "Apple", "Mango"];

let position = fruits.lastIndexOf('Apple') + 1;

demo.innerHTML = `Apple is found in position ${position}.`;