function myFunction() {
    let txt;
    let person = prompt('Please enter your name: ', 'Thanh Pham');
    if (person == null || person == '') {
        txt = 'User canceled the prompt.';
    } else {
        txt = 'Hello ' + person + '! How are you today?';
    }
    document.querySelector('#demo').innerHTML = txt;
}