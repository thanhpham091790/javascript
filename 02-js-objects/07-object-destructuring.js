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
