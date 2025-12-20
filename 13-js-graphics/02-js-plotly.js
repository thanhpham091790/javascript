const xArray = [55, 49, 44, 24, 15];
const yArray = ["Italy", "France", "Spain", "USA", "Argentina"];

const data = [{
    x: xArray,
    y: yArray,
    type: 'bar',
    orientation: 'h',
    marker: { color: 'salmon' }
}];

const layout = { title: 'Wine Production' };
Plotly.newPlot('myPlot', data, layout);