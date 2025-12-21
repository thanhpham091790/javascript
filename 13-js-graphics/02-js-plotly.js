
// Generate values
const x1 = [];
const x2 = [];
const x3 = [];
const y1 = [];
const y2 = [];
const y3 = [];

for (let i = 0; i <= 10; i++) {
    x1.push(i);
    x2.push(i);
    x3.push(i);

    y1.push(i);
    y2.push(i * 1.5);
    y3.push(i * 1.5 + 7);
}


const data = [
    { x: x1, y: y1, mode: 'lines' },
    { x: x2, y: y2, mode: 'lines' },
    { x: x3, y: y3, mode: 'lines' }
];
const layout = { title: `y=x | y=x*1.5 | y=x*1.5+7` };

Plotly.newPlot('myPlot', data, layout);