
// Generate values
const data = [
    {
        x: [1, 2, 3, 4],
        y: [10, 20, 30, 40],
        mode: 'markers',
        marker: {
            color: ['red', 'green', 'blue', 'orange'],
            size: [20, 30, 40, 50]
        }
    },
    {
        x: [1, 2, 3, 4],
        y: [15, 30, 45, 60],
        mode: 'markers',
        marker: {
            color: 'rgb(31, 119, 180)',
            size: 18,
            symbol: ['circle', 'square', 'diamond', 'cross']
        }
    }
];

const layout = {
    title: 'Plotting Bubbles'
};

Plotly.newPlot('myPlot', data, layout);