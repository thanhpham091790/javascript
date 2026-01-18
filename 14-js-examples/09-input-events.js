const name = document.querySelector('#name');

name.addEventListener('focus', onFocusHandler);

function onFocusHandler(event) {
    event.target.style.backgroundColor = 'yellow';
}