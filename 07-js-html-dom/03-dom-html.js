// Dynamic HTML content
const demoEl = document.querySelector('#demo');
setInterval(() => {
    demoEl.innerHTML = Date();
}, 1000);