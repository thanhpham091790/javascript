const input = document.querySelector('input');

input.addEventListener('keydown', onKeydownHandler);

function onKeydownHandler(event) {
    console.log(`You are pressing: ${event.key} key.`);
}