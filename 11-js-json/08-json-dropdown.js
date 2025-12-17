const demo = document.querySelector('#demo');
const dbParam = JSON.stringify({ table: 'customers', limit: 5 });

const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => renderDropdown(xhr));
xhr.open('POST', 'json_demo_dropdown.php');
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.send('param=' + dbParam);

function renderDropdown(xhr) {
    const obj = JSON.parse(xhr.responseText);
    demo.innerHTML = obj;
}