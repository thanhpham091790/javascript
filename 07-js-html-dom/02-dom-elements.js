const elements = document.getElementsByClassName('intro');
document.getElementById('demo').innerHTML =
    'The second paragraph with class="intro" is: ' + elements.item(1).innerHTML;