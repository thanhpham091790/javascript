// Assign events using the HTML DOM
const btn = document.querySelector('button');
const demoEl = document.querySelector('#demo');
console.log(btn);
btn.onclick = () => {
    displayDate('Thanh')
};

function displayDate(name) {
    demoEl.innerHTML = name + ' ' + Date();
}