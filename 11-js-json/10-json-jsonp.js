const demo = document.querySelector('#demo');
const dbParam = JSON.stringify({ table: 'customers', limit: 10 });
let script = document.createElement('script');
script.setAttribute('src', `jsonp_demo_db.php?x=${dbParam}`);
document.body.appendChild(script);

function myFunc(arr) {
    let table = '<table><tr><th>Name</th></tr>';
    for (const item of arr) {
        table += `<tr><td>${item}</td></tr>`;
    }
    table += '</table>';
    demo.innerHTML = table;
}