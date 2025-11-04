const btn = document.querySelector('#btn');
btn.addEventListener('click', myMove);
function myMove() {
    let id = null;
    const elem = document.querySelector('#animation');
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos === 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }

    }

}