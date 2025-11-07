// The onmouseover and onmouseout event

const divEl = document.querySelector('div');

function mOver() {
    console.log('mouse over!');
    divEl.innerHTML = 'Thank you!';
}

function mOut() {
    console.log('mouse out!');
    divEl.innerHTML = 'Mouse over me!';
}