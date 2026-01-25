const body = document.body;

body.addEventListener('mousedown', () => whichElement(event));

function whichElement(e) {
    let targ, tname;
    if (!e) {
        e = window.event;
    }
    if (e.target) {
        targ = e.target;
    } else if (e.srcElement) {
        targ = e.srcElement;
    }
    tname = targ.tagName;
    alert("You clicked on a " + tname + " element.");
}