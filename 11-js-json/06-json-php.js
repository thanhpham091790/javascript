const demo = document.querySelector('#demo');

const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => renderResponse(xhr));
xhr.open('GET', 'demo_file.php', true);
xhr.send();

function renderResponse(xhr) {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = xhr.response;
        const arr = JSON.parse(response);
        demo.innerHTML = arr[0];
    }
}