const input = document.querySelector('#printPage');

input.addEventListener('click', printPage);

function printPage() {
    window.print();
}