const openWin = document.querySelector('#openWin');
const resizeWin = document.querySelector('#resizeWin');
var myWindow;

openWin.addEventListener('click', openWinHandler);
resizeWin.addEventListener('click', resizeWinHandler);

function openWinHandler() {
    myWindow = window.open('', '', 'width=400,height=400');
    myWindow.focus();
}

function resizeWinHandler() {
    myWindow.resizeTo(500, 500);
    myWindow.focus();
}