// Window screen width
const demoEl = document.querySelector('#demo');
demoEl.innerHTML =
    'Screen width: ' + screen.width + 'px.<br>' +
    'Window width: ' + window.innerWidth + 'px.<br>' +
    'Screen height: ' + screen.height + 'px.<br>' +
    'Window height: ' + window.innerHeight + 'px.';