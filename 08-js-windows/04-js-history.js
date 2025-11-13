// Window history back
const backBtn = document.querySelector('#back');
const nextBtn = document.querySelector('#next');
backBtn.addEventListener('click', () => {
    window.history.back();
});
nextBtn.addEventListener('click', () => {
    window.history.forward();
});