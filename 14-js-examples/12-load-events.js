const demo = document.querySelector('#demo');
window.addEventListener('resize', onResizeHandler);

function onResizeHandler() {
    let w = window.outerWidth;
    let h = window.outerHeight;
    let txt = `Window size: width= ${w}, height= ${h}`;
    demo.innerHTML = txt;
}