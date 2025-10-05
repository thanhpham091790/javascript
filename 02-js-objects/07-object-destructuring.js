const demoEl = document.querySelector('#demo');

// Object Destructuring
const person1 = {
    firstName1: 'John',
    lastName1: 'Doe',
    age1: 50
};
let { lastName1, firstName1 } = person1;
demoEl.innerHTML = `${firstName1} ${lastName1}`;

// Object default values
const person2 = {
    firstName2: 'Thanh',
    lastName2: 'Pham',
    age2: 35
};
let { lastName2, firstName2, country2 = 'VN' } = person2;
demoEl.innerHTML = `${firstName2} ${lastName2} is from ${country2}`;


// Object property alias
const person3 = {
    firstName3: 'Toan',
    lastName3: 'Pham',
    age3: 30
};
let { lastName3: name } = person3;
demoEl.innerHTML = `Hello Mr.${name}`;

// String destructuring
let name4 = 'W3Schools';
let [c1, c2, c3, c4, c5] = name4;
demoEl.innerHTML = `The first letter is ${c1}`;

// Array destructuring
const fruits5 = ["Bananas", "Oranges", "Apples", "Mangos"];
let [fruit51, fruit52] = fruits5;
demoEl.innerHTML = `I love ${fruit51}.`;

// Skipping array values
const fruits6 = ["Bananas", "Oranges", "Apples", "Mangos"];
let [fruits61, , , fruit62] = fruits6;
demoEl.innerHTML = `I love ${fruit62}`;

// Array position value
const fruits7 = ["Bananas", "Oranges", "Apples", "Mangos"];
let { [0]: fruit71, [2]: fruit73 } = fruits7;
demoEl.innerHTML = `The first is: ${fruit71}, and the third is: ${fruit73}`;

// The rest property
const numbers = [10, 20, 30, 40, 50, 60, 70];
const [num1, num2, ...rest] = numbers;
demoEl.innerHTML = `${num1} ${num2}, and the rest is: ${rest}`;

// Destructuring Maps
const fruits8 = new Map([
    ['apple', 500],
    ['banana', 300],
    ['orange', 200]
]);

let text = '';
for (const [key, value] of fruits8) {
    text += key + ' is ' + value + '\n';
}
demoEl.innerHTML = text;

// Swapping javascript variables
let firstName4 = 'Pham';
let lastName4 = 'Thanh';

[firstName4, lastName4] = [lastName4, firstName4];
demoEl.innerHTML = firstName4 + ' ' + lastName4;