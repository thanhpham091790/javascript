const input = document.querySelector('input');

input.addEventListener('keyup', onKeyupHandler);

function onKeyupHandler() {
    input.value = input.value.toUpperCase();
}