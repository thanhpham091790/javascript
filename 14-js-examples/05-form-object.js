const demo = document.querySelector('#demo');
const form = document.querySelector('#frm1');
const submit = document.querySelector('#submitBtn');
const reset = document.querySelector('#resetBtn');

submit.addEventListener('click', function () {
    console.log(form.enctype);
});

reset.addEventListener('click', function () {
    form.reset();
});