const form = document.querySelector('#frm1');
document.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const objectData = Object.fromEntries(formData);
    console.log(objectData);
});