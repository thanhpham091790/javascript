const c = document.querySelector('#c');
const f = document.querySelector('#f');

c.addEventListener('keyup', () => convert('c'));
f.addEventListener('keyup', () => convert('f'));

function convert(char) {
    if (char === 'c') {
        f.value = Math.round(c.value * 9 / 5 + 32);
    }
    if (char === 'f') {
        c.value = Math.round((f.value - 32) * 5 / 9);
    }
}