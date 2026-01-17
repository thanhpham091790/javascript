const myTable = document.querySelector('#myTable');
const button = document.querySelector('button');
const demo = document.querySelector('#demo');

button.addEventListener('click', insertRow);

function insertRow() {
    let row = myTable.insertRow(0);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    cell0.innerHTML = cell1.innerHTML = 'New';
}