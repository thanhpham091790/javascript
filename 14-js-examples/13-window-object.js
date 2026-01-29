const input = document.querySelector('input');

input.addEventListener('click', onClickHandler);

function onClickHandler() {
    const windowFeatures = "left=200,top=200,width=640,height=640";
    const handle = window.open(
        "https://www.woot.com/",
        "mozillaWindow",
        windowFeatures,
    );
}