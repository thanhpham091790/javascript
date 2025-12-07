const button = document.querySelector('button');
const detail = document.querySelector('#detail');
const collection = document.querySelector('#collection');
let cds;
let id = 0;

button.addEventListener('click', sendRequest);

function sendRequest() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => renderAllCollection(xhr, 'CD'));
    xhr.open('GET', 'cd_catalog.xml', true);
    xhr.send();
}

function getAllCollection(xhr, tagName) {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const xmlDoc = xhr.responseXML;
        const collection = xmlDoc.getElementsByTagName(tagName);
        return collection;
    }
}

function renderAllCollection(xhr, tagName) {
    cds = getAllCollection(xhr, tagName);
    let table = `<tr><th>Title</th><th>Artist</th></tr>`;
    for (let i = 0; i < cds.length; i++) {
        const title = cds[i].getElementsByTagName('TITLE')[0].childNodes[0].nodeValue;
        const artist = cds[i].getElementsByTagName('ARTIST')[0].childNodes[0].nodeValue;
        table += `<tr onclick='renderItemOfCollection(${i})'><td>${title}</td><td>${artist}</td></tr>`;
    }
    collection.innerHTML = table;
}

function renderItemOfCollection(id) {
    i = id;
    const cd = cds[id];
    const itemDetail = `
        <p>Artist: ${cd.getElementsByTagName('ARTIST')[0].childNodes[0].nodeValue}</p>
        <p>Title: ${cd.getElementsByTagName('TITLE')[0].childNodes[0].nodeValue}</p>
        <p>Year: ${cd.getElementsByTagName('YEAR')[0].childNodes[0].nodeValue}</p>
        <button type='button' onclick='previousCD()' ${i === 0 ? 'disabled' : ''}>Previous</button>
        <button type='button' onclick='nextCD()' ${i === cds.length - 1 ? 'disabled' : ''}>Next</button>
    `;
    detail.innerHTML = itemDetail;
}

function nextCD() {
    if (i < cds.length - 1) {
        i++;
        renderItemOfCollection(i);
    }
}

function previousCD() {
    if (i > 0) {
        i--;
        renderItemOfCollection(i);
    }
}


