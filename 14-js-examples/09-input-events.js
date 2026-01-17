const firstName = document.querySelector('#fname');
console.log(firstName);
firstName.addEventListener('blur', onBlurHandler);

function onBlurHandler(event) {
    event.target.value = event.target.value.toUpperCase();
}