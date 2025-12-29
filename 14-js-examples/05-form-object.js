
const form = document.querySelector('#frm1');
const submit = document.querySelector('#submitBtn');
const reset = document.querySelector('#resetBtn');
submit.addEventListener('click', function () {
    form.submit();
});

reset.addEventListener('click', function () {
    form.reset();
});