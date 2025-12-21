
// Generate values
const x = [];
const y = [];
for (let i = 0; i <= 10; i++) {
    x.push(i);
    y.push(i + 17);
}
const data = [{ x, y, mode: 'lines' }];
const layout = { title: 'y = x + 17' };

Plotly.newPlot('myPlot', data, layout);