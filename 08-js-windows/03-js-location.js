// Window location href
const demoEl = document.querySelector('#demo');
demoEl.innerHTML =
    'Page location href: ' + window.location.href + '.<br>' +
    'Page location pathname: ' + window.location.pathname + '.<br>' +
    'Page location hostname: ' + window.location.hostname;