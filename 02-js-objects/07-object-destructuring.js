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