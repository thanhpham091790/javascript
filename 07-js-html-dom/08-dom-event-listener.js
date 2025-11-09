const myBtn = document.querySelector('#myBtn');
const demoEl = document.querySelector('#demo');

myBtn.addEventListener('click', () => {
    demoEl.innerHTML = Date();
});