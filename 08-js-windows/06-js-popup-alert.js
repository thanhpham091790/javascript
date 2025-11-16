// Confirm Box
const btn = document.querySelector('button');
const demoEl = document.querySelector('#demo');

btn.addEventListener('click', () => {
    var text;
    if (confirm('Press a button!')) {
        text = 'You pressed OK!';
    } else {
        text = 'You pressed Cancel!';
    }
    demoEl.innerHTML = text;
});

