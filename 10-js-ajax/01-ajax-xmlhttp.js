const button = document.querySelector('button');
const demo = document.querySelector('#demo');

button.addEventListener('click', changeContent);

function changeContent() {
    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('readystatechange', () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            demo.innerHTML = xhttp.responseText;
        }
    });
    xhttp.open('GET', 'ajax-info.txt');
    xhttp.send();
}