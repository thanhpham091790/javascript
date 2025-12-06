const demo = document.querySelector('#demo');
const button = document.querySelector('button');

button.addEventListener('click', sendRequest);

function sendRequest() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => renderResponse(xhr));
    xhr.open('GET', 'cd_catalog.xml', true);
    xhr.send();
}

function renderResponse(xhr) {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let table =
            `<table>
                <tr>
                    <th>TITLE</th>
                    <th>ARTISTS</th>
                <tr>`;
        const cds = xhr.responseXML.getElementsByTagName('CD');
        for (const cd of cds) {
            table +=
                `<tr>
                    <td>${cd.getElementsByTagName('TITLE')[0].innerHTML}</td>
                    <td>${cd.getElementsByTagName('ARTIST')[0].innerHTML}</td>
                </tr>`;
        }

        table += `</table>`;
        demo.innerHTML = table;
    }
}