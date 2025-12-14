const demo = document.querySelector('#demo');

const limit = { limit: 10 };
const dbParam = JSON.stringify(limit);

const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => renderResponse(xhr));
xhr.open('GET', `json_demo_db.php?x=${dbParam}`, true);
xhr.send();

function renderResponse(xhr) {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = xhr.response;
        const arr = JSON.parse(response);
        let table = `<table><tr><th>Name</th></tr>`;
        for (const item of arr) {
            table += `<tr><td>${item.name}</td></tr>`;
        }
        table += `</table>`;
        demo.innerHTML = table;
    }
}