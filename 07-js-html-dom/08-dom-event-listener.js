const myBtn = document.querySelector('#myBtn');
const demoEl = document.querySelector('#demo');

let p1 = 5;
let p2 = 7;

myBtn.addEventListener('click', () => {
    myFunction(p1, p2);
});

function myFunction(a, b) {
    demoEl.innerHTML = a * b;
}