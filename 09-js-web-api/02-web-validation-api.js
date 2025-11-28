const demoEl = document.querySelector('#demo');
const button = document.querySelector('button');

button.addEventListener('click', myFunction);

function myFunction() {
    const inputObject = document.querySelector('#id1');
    if (inputObject.validity.rangeOverflow) {
        demoEl.innerHTML = 'No more than 100.';
    } else if (inputObject.validity.rangeUnderflow) {
        demoEl.innerHTML = 'No less than 10.';
    } else {
        demoEl.innerHTML = 'Input oke.';
    }
}