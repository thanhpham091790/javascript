const demoEl = document.querySelector('#demo');
const button = document.querySelector('button');

button.addEventListener('click', getLocation);

function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch (err) {
        demoEl.innerHTML = err;
    }
}

function showPosition(position) {
    console.log(position);
    demoEl.innerHTML = 'Latitude: ' + position.coords.latitude +
        '<br>Longitude: ' + position.coords.longitude;
}