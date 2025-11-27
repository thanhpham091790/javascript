const demoEl = document.querySelector('#demo');
const button = document.querySelector('button');

button.addEventListener('click', myFunction);

function myFunction() {
    const inputObject = document.querySelector('#id1');
    if (!inputObject.checkValidity()) {
        demoEl.innerHTML = inputObject.validationMessage;
    } else {
        demoEl.innerHTML = 'Input OK';
    }
}