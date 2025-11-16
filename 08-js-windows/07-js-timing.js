// How to stop setTimeout() method
const tryIt = document.querySelector('#tryit');
const stopIt = document.querySelector('#stopit');

tryIt.addEventListener('click', () => {
    myVar = setTimeout(function () {
        alert('Thanh Pham');
    }, 3000);
});

stopIt.addEventListener('click', () => {
    clearTimeout(myVar);
});