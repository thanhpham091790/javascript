import { name, age } from './person.js';
import message from './message.js';

const demoEl = document.querySelector('#demo');
demoEl.innerHTML = `${name} is ${age} years old.`;

setTimeout(() => {
    demoEl.innerHTML = message();
}, 3000);

