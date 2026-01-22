const form = document.forms[0];
const fname = form.fname.value;

form.addEventListener('submit', onSubmitHandler);

function onSubmitHandler(event) {
    event.preventDefault();
    console.log(fname);
}