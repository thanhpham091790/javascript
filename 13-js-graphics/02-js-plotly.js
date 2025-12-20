
// Generate values
const xValues = [];
const yValues = [];
for (let i = 0; i <= 10; i += 0.1) {
    xValues.push(i);
    yValues.push(Math.sin(i));
}

const data = [{
    x: xValues,
    y: yValues,
    mode: 'lines'
}];

const layout = { title: `y = Math.sin(x)` };
Plotly.newPlot('myPlot', data, layout);