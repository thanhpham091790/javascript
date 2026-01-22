const form = document.forms[0];
const input = form[0];
const reset = form[1];

form.addEventListener('reset', onResetHandler);

function onResetHandler() {
    console.log('Your form is reseted.');
}