const myTable = document.querySelector('#myTable');
const button = document.querySelector('button');
const demo = document.querySelector('#demo');

button.addEventListener('click', displayFirstCell);

function displayFirstCell() {
    console.log(myTable);
    demo.innerHTML = myTable.rows[0].cells[0].innerHTML;
}