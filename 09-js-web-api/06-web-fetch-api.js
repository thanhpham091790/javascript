const demoEl = document.querySelector('#demo');
let file = 'fetch_info.txt';
fetch(file)
    .then(x => x.text())
    .then(y => demoEl.innerHTML = y);