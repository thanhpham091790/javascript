console.log('connected!');

const demo = document.querySelector('#demo');

const girls = ["Cecilie", "Lone"];
const boys = ["Emil", "Tobias", "Linus"];
const children = girls.concat(boys);

demo.innerHTML = children;