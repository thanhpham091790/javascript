// Browser Cookies
const demoEl = document.querySelector('#demo');
demoEl.innerHTML =
    'The cookiesEnable is ' + navigator.cookieEnabled + '. <br>' +
    'The browser is online ' + navigator.onLine + '. <br>' +
    'The browser application name ' + navigator.appName + '. <br>' +
    'The language is ' + navigator.language + '. <br>';
