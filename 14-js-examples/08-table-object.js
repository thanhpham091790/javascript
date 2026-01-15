const myTable = document.querySelector('#myTable');
const button = document.querySelector('button');

button.addEventListener('click', changeBorder);

function changeBorder() {
    myTable.style.border = '1px solid red';
}