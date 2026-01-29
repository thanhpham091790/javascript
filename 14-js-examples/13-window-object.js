const openWin = document.querySelector('#openWin');
const closeWin = document.querySelector('#closeWin');
const checkWin = document.querySelector('#checkWin');
const message = document.querySelector('#msg');
var myWindow;

openWin.addEventListener('click', openWinHandler);
closeWin.addEventListener('click', closeWinHandler);
checkWin.addEventListener('click', checkWinHandler);


function openWinHandler() {
    myWindow = window.open('https://www.woot.com/', '_blank', 'width=400,height=400');
}
function closeWinHandler() {
    if (myWindow)
        myWindow.close();
}
function checkWinHandler() {
    msg = '';
    if (!myWindow) {
        msg = 'was never opened';
    } else {
        if (myWindow.closed) {
            msg = 'is closed';
        } else {
            msg = 'is open';
        }
    }
    message.innerHTML = 'myWindow ' + msg;
}