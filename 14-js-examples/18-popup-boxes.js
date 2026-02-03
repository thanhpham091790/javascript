function myFunction() {
    var txt;
    if (confirm('Press a button')) {
        txt = 'You pressed OK!';
    } else {
        txt = 'You pressed Cancel!';
    }
    document.querySelector('#demo').innerHTML = txt;
}