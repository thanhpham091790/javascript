console.log('connected!');

const demo1 = document.querySelector('#demo1');
const demo2 = document.querySelector('#demo2');

const fruits = ["Banana", "Orange", "Apple", "Mango"];
demo1.innerHTML = fruits;

fruits.splice(2, 0, ['Lemon', 'Kiwi']);
demo2.innerHTML = fruits;