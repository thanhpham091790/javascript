const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];

const data = [{
    labels: xArray,
    values: yArray,
    type: 'pie',
    hole: .33
}];

const layout = { title: 'Wine Production' };
Plotly.newPlot('myPlot', data, layout);