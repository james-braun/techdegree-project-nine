

let label2 = ["S","M","T","W","T","F","S"];
let chartData2 = [75,100,175,125,225,200,100];
let trafficChart = document.getElementById("trafficChart").getContext('2d');
let weeklyTrafficChart = document.getElementById("weeklyTrafficChart").getContext('2d');
let span = document.querySelectorAll("span");




let mainTrafficChart = new Chart(trafficChart, {
    type: 'line',
    options: {
        legend: {
            display: false,
        },
        elements: {
            line: {
                tension: 0,
            },
            point: {
                radius: 5,
                pointStyle: 'circle',               
            },
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        },        
    },
    data: {
        labels: label2,
        datasets: [{
            data: chartData2,           
            borderColor: 'rgb(100, 149, 253)',
            backgroundColor: 'rgba(100, 149, 253, 0.2)',
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        }]
    },    
});

let weeklyChart = new Chart(weeklyTrafficChart, {
    type: 'bar',
    data: {
        labels: label2,
        datasets: [{
            data: chartData2,
            backgroundColor: 'rgba(100, 149, 253, 1)',
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
            }],
        }
    }
});