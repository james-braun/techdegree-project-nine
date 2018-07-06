

let label = [["t","w","t","f","s","s","m"],["S","M","T","W","T","F","S"],["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"],["f","s","s","m","t","w","t"]];
let chartData = [[75,100,175,125,225,200,100], [75,100,175,125,225,200,100], [700,1300,1000,1500,2000,1500,1700,1300,1100,1500,2000], [75,100,175,125,225,200,100]];
let trafficChart = document.getElementById("trafficChart").getContext('2d');
let weeklyTrafficChart = document.getElementById("weeklyTrafficChart").getContext('2d');
let spanElement = document.querySelectorAll("span");
let dot = document.getElementById("dot");
let pElement = document.querySelector("p");


spanElement[2].style.backgroundColor = 'lightgreen';
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
        labels: label[2],
        datasets: [{
            data: chartData[2],           
            borderColor: 'rgb(100, 149, 253)',
            backgroundColor: 'rgba(100, 149, 253, 0.2)',
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        }]
    },    
});

pElement.addEventListener("click", function() {
    pElement.style.opacity = 0;
    pElement.style.zIndex = -100;
    dot.style.display = 'none';
});

for (let j = 0; j < spanElement.length; ++j) {
    spanElement[j].addEventListener('click', function(e) {
        spanElement[0].style.backgroundColor = 'white';
        spanElement[1].style.backgroundColor = 'white';
        spanElement[2].style.backgroundColor = 'white';
        spanElement[3].style.backgroundColor = 'white';
        for (let i = 0; i < spanElement.length; ++i) {
            if ($(e.target).is(spanElement[i])) {
                e.target.style.backgroundColor = "lightgreen";
                mainTrafficChart = new Chart(trafficChart, {
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
                        labels: label[i],
                        datasets: [{
                            data: chartData[i],           
                            borderColor: 'rgb(100, 149, 253)',
                            backgroundColor: 'rgba(100, 149, 253, 0.2)',
                            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                        }]
                    },    
                });
            }
        }
    });
}
let weeklyChart = new Chart(weeklyTrafficChart, {
    type: 'bar',
    data: {
        labels: label[1],
        datasets: [{
            data: chartData[1],
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