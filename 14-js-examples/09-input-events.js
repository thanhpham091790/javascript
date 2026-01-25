const input1 = document.forms[0][0];
const input2 = document.forms[0][1];

input1.addEventListener('keyup', onKeyupHandler);

function onKeyupHandler() {
    input2.value = input1.value;
}