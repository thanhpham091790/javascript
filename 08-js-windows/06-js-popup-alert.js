// Prompt Box
const btn = document.querySelector('button');
const demoEl = document.querySelector('#demo');

btn.addEventListener('click', () => {
    let text;
    let person = prompt('Please enter your name:', 'Thanh Pham');
    if (person == null || person == '') {
        text = 'User cancelled the prompt.';
    } else {
        text = 'Hello ' + person + '! How are you today?';
    }
    demoEl.innerHTML = text;
});