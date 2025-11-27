const demoEl = document.querySelector('#demo');
const button = document.querySelector('button');

button.addEventListener('click', myFunction);

function myFunction() {
    const inputObject = document.querySelector('#id1');
    if (inputObject.validity.rangeOverflow) {
        demoEl.innerHTML = 'No more than 100.';
    } else {
        demoEl.innerHTML = 'Input OK';
    }
}