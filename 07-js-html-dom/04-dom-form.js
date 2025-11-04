// Javascript form validation
const myForm = document.forms['myForm'];
myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let fnameValue = myForm['fname'].value;
    if (fnameValue == '') {
        const fnameMessage = document.querySelector('.fnameMessage');
        fnameMessage.innerHTML = 'First name must be filled in!';
        fnameMessage.style.color = 'red';
    } else {
        console.log({ fname: fnameValue });
    }

});