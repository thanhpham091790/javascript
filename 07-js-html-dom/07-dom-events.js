// The onmousedown and onmouseup event

const divEl = document.querySelector('#demo');

function mDown() {
    console.log('mouse down!');
    divEl.innerHTML = 'Thank you!';
}

function mUp() {
    console.log('mouse up!');
    divEl.innerHTML = 'Click me!';
}