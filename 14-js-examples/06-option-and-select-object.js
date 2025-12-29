const disable = document.querySelector('#disable');
const enable = document.querySelector('#enable');
const mySelect = document.querySelector('#mySelect');
const demo = document.querySelector('#demo');

disable.addEventListener('click', disableHandler);
enable.addEventListener('click', enableHandler);
demo.innerHTML = mySelect.length;

function disableHandler() {
    mySelect.disabled = true;
}

function enableHandler() {
    mySelect.disabled = false;
}