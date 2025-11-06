// Onload and unonload events
const demoEl = document.querySelector('#demo');

document.addEventListener('DOMContentLoaded', checkCookies);

function checkCookies() {
    let text = '';
    if (navigator.cookieEnabled == true) {
        text = 'Cookies are enabled.';
    } else {
        text = 'Cookies are not enabled.';
    }
    demoEl.innerHTML = text;
}