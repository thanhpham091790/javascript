const disable = document.querySelector('#disable');
const enable = document.querySelector('#enable');
const mySelect = document.querySelector('#mySelect');
const demo = document.querySelector('#demo');
const changeSize = document.querySelector('#changeSize');
const multiple = document.querySelector('#multiple');
const selected = document.querySelector('#selected');

disable.addEventListener('click', disableHandler);
enable.addEventListener('click', enableHandler);
changeSize.addEventListener('click', changeSizeHandler);
multiple.addEventListener('click', multipleHandler);
selected.addEventListener('click', selectedHandler);
all.addEventListener('click', allHandler);

function allHandler() {
    let options = '';
    for (let i = 0; i < mySelect.length; i++) {
        options += mySelect.options[i].text + ' ';
    }
    demo.innerHTML = mySelect.selectedIndex;
}

function selectedHandler() {
    demo.innerHTML = mySelect.options[mySelect.selectedIndex].value;
    console.log(mySelect);
}

function multipleHandler() {
    changeSizeHandler();
    mySelect.multiple = true;
}

function changeSizeHandler() {
    mySelect.size = 4;

}

function disableHandler() {
    mySelect.disabled = true;
}

function enableHandler() {
    mySelect.disabled = false;
}

