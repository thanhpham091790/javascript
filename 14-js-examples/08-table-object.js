const myTable = document.querySelector('#myTable');
const button = document.querySelector('button');
const demo = document.querySelector('#demo');

button.addEventListener('click', createCaption);

function createCaption() {
    console.log(myTable);
    myTable.createCaption().innerHTML = 'Table Caption';
}