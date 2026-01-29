const openWin = document.querySelector('#openWin');
const moveWin = document.querySelector('#moveWin');
var myWindow;

openWin.addEventListener('click', openWinHandler);
moveWin.addEventListener('click', moveWinHandler);

function openWinHandler() {
    myWindow = window.open('', '', 'width=400,height=400');
}

function moveWinHandler() {
    myWindow.moveBy(250, 250);
}

