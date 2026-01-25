const div = document.querySelector('div');

div.addEventListener('mousedown', () => whichButton(event));

function whichButton(e) {
    alert("You pressed button:  " + e.button);
}