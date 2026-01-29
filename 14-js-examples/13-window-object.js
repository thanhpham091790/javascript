const input = document.querySelector('input');

input.addEventListener('click', onClickHandler);

function onClickHandler() {
    const windowFeatures = "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400";
    const handle = window.open(
        "https://www.woot.com/",
        "_blank",
        windowFeatures,
    );
}