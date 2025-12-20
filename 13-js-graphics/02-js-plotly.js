const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];

const data = [{
    x: xArray,
    y: yArray,
    type: 'bar',
    orientation: 'v',
    marker: { color: 'salmon' }
}];

const layout = { title: 'Wine Production' };
Plotly.newPlot('myPlot', data, layout);