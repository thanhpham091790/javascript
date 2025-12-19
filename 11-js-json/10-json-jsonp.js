const demo = document.querySelector('#demo');
const select = document.querySelector('select');

select.addEventListener('change', (event) => {
    requestData(event.target.value);
});

requestData();

function requestData(table = 'customers') {
    const dbParam = JSON.stringify({ table, limit: 10 });
    let script = document.createElement('script');
    script.setAttribute('src', `jsonp_demo_db.php?x=${dbParam}`);
    document.body.appendChild(script);
}


function myFunc(arr) {
    let table = '<table><tr><th>Name</th></tr>';
    for (const item of arr) {
        table += `<tr><td>${item}</td></tr>`;
    }
    table += '</table>';
    demo.innerHTML = table;
}