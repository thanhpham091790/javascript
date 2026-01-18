const browsers = document.querySelector('#browsers');

browsers.addEventListener('change', onChangeHandler);

function onChangeHandler() {
    console.log(browsers.options[browsers.selectedIndex].text);
}