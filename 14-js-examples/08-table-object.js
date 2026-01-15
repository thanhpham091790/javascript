const myTable = document.querySelector('#myTable');
const button = document.querySelector('button');

button.addEventListener('click', changeBorderAndPadding);

function changeBorderAndPadding() {
    myTable.style.border = '1px solid red';
    myTable.style.padding = '15px';
}