const form = document.forms['frm1'];
let text = '';
for (let i = 0; i < form.length; i++) {
    text += form[i].value + '<br>';
}
document.querySelector('#demo').innerHTML = text;