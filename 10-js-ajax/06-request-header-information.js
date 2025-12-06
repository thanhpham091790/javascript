const demo = document.querySelector('#demo');
const button = document.querySelector('button');

button.addEventListener('click', sendRequest);

function sendRequest() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => getHeaderInfo(xhr));
    xhr.open('GET', 'cd_catalog.xml', true);
    xhr.send();
}

function getHeaderInfo(xhr) {
    console.log(xhr.getAllResponseHeaders());
    demo.innerHTML = xhr.getResponseHeader('content-type');
}
