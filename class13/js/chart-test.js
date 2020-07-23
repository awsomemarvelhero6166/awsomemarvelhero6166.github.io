//htmlからグラフを描画する要素(Canvas)を取得する
var ctx = document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Astonishpurple'],
        datasets: [
            {
                type: 'line',
                data: [21, 31, 53, 5, 100, 7],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(62, 35, 12, 0.2)',
                    'rgba(94, 52, 352, 0.2)',
                    'rgba(23, 192, 11, 0.2)',
                ]
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});