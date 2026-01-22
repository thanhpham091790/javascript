const input = document.querySelector('input');
const demo = document.querySelector('#demo');

input.addEventListener('select', onSelectHandler);

function onSelectHandler() {
    const selectedText = getHighlightedText();
    if (selectedText.length > 0)
        demo.textContent = `You selected: ${selectedText}`;
}

function getHighlightedText() {
    let text = "";
    if (window.getSelection) { // Check for the standard method
        text = window.getSelection().toString();
    }
    /* The `document.selection` approach below is for older IE versions and is no longer needed in modern browsers. */
    return text;
}