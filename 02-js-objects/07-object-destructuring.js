const demoEl = document.querySelector('#demo');

// Object Destructuring
const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50
};
let { lastName, firstName } = person1;
demoEl.innerHTML = `${firstName} ${lastName}`;