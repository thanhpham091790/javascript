$(document).ready(function () {
    var pEls = $('p');
    var demo = $('#demo');

    demo.text(`The text in the first paragraph is: ${pEls[0].textContent}`);
});