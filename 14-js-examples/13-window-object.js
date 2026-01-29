const openWin = document.querySelector('#open');
const closeWin = document.querySelector('#close');
var myWindow;

openWin.addEventListener('click', openWinHandler);
closeWin.addEventListener('click', closeWinHandler);


function openWinHandler() {
    myWindow = window.open('https://www.woot.com/', '_blank', 'width=400,height=400');
}
function closeWinHandler() {
    myWindow.close();
}