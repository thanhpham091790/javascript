const demo = document.querySelector('#demo');
const button = document.querySelector('button');

button.addEventListener('click', sendRequest);

function sendRequest() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => renderResponse(xhr));
    xhr.open('GET', 'ajax-info.txt', true);
    xhr.send();
}

function renderResponse(xhr) {
    if (xhr.readyState === 4 && xhr.status === 200) {
        demo.innerHTML = xhr.responseText;
    }
}