const openWin = document.querySelector('#openWin');

openWin.addEventListener('click', openWinHandler);

function openWinHandler() {
    const myWindow = window.open('', '', 'width=400,height=400');
    myWindow.opener.document.querySelector('#demo').innerHTML = 'A new window has been opened.';
}