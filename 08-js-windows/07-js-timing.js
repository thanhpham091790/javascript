// The setTimeout() method
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    setTimeout(() => {
        alert('Hello Thanh!');
    }, 3000);
});