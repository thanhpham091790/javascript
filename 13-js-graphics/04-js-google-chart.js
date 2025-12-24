console.log('connected!');
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

// Your Function
function drawChart() {
    // Set data
    const data = google.visualization.arrayToDataTable([
        ['Country', 'Mhl'],
        ['Italy', 55],
        ['France', 49],
        ['Spain', 44],
        ['USA', 24],
        ['Argentina', 15]
    ]);
    // Set options
    const options = {
        title: 'World Wide Wine Production.'
    }

    // Draw
    const chart = new google.visualization.BarChart(document.getElementById('myChart'));
    chart.draw(data, options);
}