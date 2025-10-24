const demoEl = document.querySelector('#demo');

// Async syntax
async function myFunction1() {
    return 'Thanh Pham';
}

myFunction1().then(
    function (name) {
        demoEl.innerHTML = name;
    }
);