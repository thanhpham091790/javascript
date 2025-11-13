// Window screen width
const demoEl = document.querySelector('#demo');
demoEl.innerHTML =
    'Screen width: ' + screen.width + 'px.<br>' +
    'Screen height: ' + screen.height + 'px.<br>' +
    'Screen available width: ' + screen.availWidth + 'px.<br>' +
    'Screen available height: ' + screen.availHeight + 'px.<br>' +
    'Screen color depth: ' + screen.colorDepth + '.<br>' +
    'Screen pixel depth: ' + screen.pixelDepth + '.<br>' +
    'Window width: ' + window.innerWidth + 'px.<br>' +
    'Window height: ' + window.innerHeight + 'px.<br>';