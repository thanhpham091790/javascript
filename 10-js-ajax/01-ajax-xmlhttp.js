const button = document.querySelector('button');
const demo = document.querySelector('#demo');

button.addEventListener('click', changeContent);

function changeContent() {
    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', () => {
        demo.innerHTML = xhttp.responseText;
    });
    xhttp.open('GET', 'ajax-info.txt');
    xhttp.send();
}