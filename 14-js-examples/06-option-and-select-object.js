const disable = document.querySelector('#disable');
const enable = document.querySelector('#enable');
const mySelect = document.querySelector('#mySelect');
const demo = document.querySelector('#demo');
const changeSize = document.querySelector('#changeSize');

disable.addEventListener('click', disableHandler);
enable.addEventListener('click', enableHandler);
changeSize.addEventListener('click', changeSizeHandler);

function changeSizeHandler() {
    mySelect.size = 4;
}

function disableHandler() {
    mySelect.disabled = true;
}

function enableHandler() {
    mySelect.disabled = false;
}

