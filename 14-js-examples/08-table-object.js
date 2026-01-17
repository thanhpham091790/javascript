const myTable = document.querySelector('#myTable');
const button = document.querySelector('button');
const demo = document.querySelector('#demo');

button.addEventListener('click', deleteOneRow);

function deleteOneRow() {
    myTable.deleteRow(0);
}