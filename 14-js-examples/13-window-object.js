const openWin = document.querySelector('#open');
const blurWin = document.querySelector('#blur');
const focusWin = document.querySelector('#focus');
var myWindow;

openWin.addEventListener('click', openWinHandler);
blurWin.addEventListener('click', blurWinHandler);
focusWin.addEventListener('click', focusWinHandler);

function openWinHandler() {
    myWindow = window.open('https://www.woot.com/', '_blank', 'width=400,height=400');
    myWindow.blur();
}
function blurWinHandler() {
    myWindow.blur();
}
function focusWinHandler() {
    myWindow.focus();
}

