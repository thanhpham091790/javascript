const myTable = document.querySelector('#myTable');
const button = document.querySelector('button');
const demo = document.querySelector('#demo');

button.addEventListener('click', () => changeContent(0, 0, 'Thanh Pham'));

function changeContent(row, cell, content) {
    myTable.rows[row].cells[cell].innerHTML = content;
}