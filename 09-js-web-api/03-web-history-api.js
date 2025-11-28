const demoEl = document.querySelector('#demo');
const buttons = document.querySelectorAll('button');
console.log(buttons);

document.addEventListener('click', myFunction);

function myFunction(event) {
    if (event.target.id === 'back')
        window.history.back();
    if (event.target.id === 'forward')
        window.history.forward();
}