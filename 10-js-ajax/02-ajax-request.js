const button = document.querySelector('button');
const demo = document.querySelector('#demo');

button.addEventListener('click', sendGetRequest);

function sendGetRequest() {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.addEventListener('readystatechange', () => {
        readFile(xmlHttp);
    });
    xmlHttp.open('GET', 'ajax-info.txt', true);
    xmlHttp.send();
}

function readFile(xmlHttp) {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        demo.innerHTML = xmlHttp.responseText;
    }
}