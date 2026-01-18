const firstName = document.querySelector('#fname');

firstName.addEventListener('change', onChangeHandler);

function onChangeHandler(event) {
    event.target.value = event.target.value.toUpperCase();
}