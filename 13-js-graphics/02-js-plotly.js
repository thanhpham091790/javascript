
// Generate values
const xValues = [];
const yValues = [];
for (let i = 0; i <= 10; i += 0.2) {
    xValues.push(i);
    yValues.push(Math.cos(i));
}

const data = [{
    x: xValues,
    y: yValues,
    mode: 'markers'
}];

const layout = { title: `y = Math.cos(x)` };
Plotly.newPlot('myPlot', data, layout);