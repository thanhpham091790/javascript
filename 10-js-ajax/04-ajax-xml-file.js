const button = document.querySelector('button');
const demo = document.querySelector('#demo');

button.addEventListener('click', sendRequest);

function sendRequest() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.addEventListener('load', () => renderData(xmlhttp));
    xmlhttp.open('GET', 'cd_catalog.xml');
    xmlhttp.send();

}

function renderData(xmlhttp) {
    const xml = xmlhttp.responseXML;
    const cdCollection = xml.getElementsByTagName('CD');
    let row = `<tr><th>Title</th><th>Artist</th></tr>`;
    for (const cd of cdCollection) {
        const title = cd.getElementsByTagName('TITLE')[0].innerHTML;
        const artist = cd.getElementsByTagName('ARTIST')[0].innerHTML;
        row += `<tr><td>${title}</td><td>${artist}</td></tr>`;
    }
    demo.innerHTML = row;
}