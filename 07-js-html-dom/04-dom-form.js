// Javascript can validate numeric input
const submitBtn = document.querySelector('#submit');
const demoEl = document.querySelector('#demo');

submitBtn.addEventListener('click', myFunction);

function myFunction() {
    let numb = document.querySelector('#numb').value;
    let message;
    if (isNaN(numb) || numb < 1 || numb > 10) {
        message = 'Input not valid.';
    } else {
        message = 'Input OK';
    }
    demoEl.innerHTML = message;
}