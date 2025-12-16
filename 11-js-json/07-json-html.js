const demo = document.querySelector('#demo');
const select = document.querySelector('#select');
select.addEventListener('change', sendRequest);

function sendRequest(event) {
    const value = event.target.value;
    if (value != '') {
        const dbParam = JSON.stringify({ table: value });

        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => renderResponse(xhr));
        xhr.open('POST', `json_demo_html_table.php`, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(`x=${dbParam}`);
    } else {
        console.log('Please choose table!');
    }

}

function renderResponse(xhr) {
    const response = xhr.response;
    demo.innerHTML = response;
}