const demo = document.querySelector('#demo');
const form = document.querySelector('#frm1');
const submit = document.querySelector('#submitBtn');
const reset = document.querySelector('#resetBtn');

submit.addEventListener('click', function () {
    let dataObj = {};
    console.log(form);
    for (let i = 0; i < form.length; i++) {
        dataObj[form.elements[i].name] = form.elements[i].value;
    }
    console.log(dataObj);
});

reset.addEventListener('click', function () {
    form.reset();
});