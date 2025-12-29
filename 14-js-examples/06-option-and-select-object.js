const disable = document.querySelector('#disable');
const enable = document.querySelector('#enable');
const mySelect = document.querySelector('#mySelect');

disable.addEventListener('click', disableHandler);
enable.addEventListener('click', enableHandler);

function disableHandler() {
    mySelect.disabled = true;
}

function enableHandler() {
    mySelect.disabled = false;
}