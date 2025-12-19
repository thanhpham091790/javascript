$(document).ready(function () {
    var world = $('#id01');
    console.log(world);
    $('#demo').text(`The text from the id01 paragraph is: ${world[0].innerHTML}`);
});