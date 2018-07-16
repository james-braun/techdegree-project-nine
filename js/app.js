

let label = [["12","1","2","3","4","5","6","7","8","9","10","11"],["S","M","T","W","T","F","S"],["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"],['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']];
let chartData = [[75,100,175,125,225,200,100,175,125,225,200,100], [75,100,175,125,225,200,100], [700,1300,1000,1500,2000,1500,1700,1300,1100,1500,2000], [2800,3900,4000,4500,6500,4200,6100,8000,3300,6000,7500,5600]];
let trafficChart = document.getElementById("trafficChart").getContext('2d');
let weeklyTrafficChart = document.getElementById("weeklyTrafficChart").getContext('2d');
let mobileUsersChart = document.getElementById("mobileUsersChart").getContext('2d');
let spanElement = document.querySelectorAll(".span-class");
let dot = document.getElementById("dot");
let pElement = document.querySelector("p");
let sendButton = document.getElementById("form-send");
let close = document.getElementById("close-button")

close.addEventListener("click", function(){
    let div = document.getElementById('alert');
    div.style.display = "none";
    dot.style.display = "none";
});

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
let mobileChart = new Chart(mobileUsersChart, {
    type: 'doughnut',
    data: {
        labels: ["Phones","Tablets","Desktops"],
        datasets: [{
            data: [100, 250, 50],
            backgroundColor: ['rgba(100,253,149,1)', 'rgba(100,149,253,1)', 'rgba(253,100,149,1)']
        }]
    },
    options: {
        legend: {
            labels: {
                boxWidth: 10   
            },
            position: 'right',
        },
    }
});

sendButton.addEventListener("click", function() {
    if ((document.getElementById("form-input").value === "") || (document.getElementById("form-textarea").value === "")) {
        alert("Error - empty Field!");
    } else {
        alert("Message sent!");
    }

    document.getElementById("form-input").value = "";
    document.getElementById("form-textarea").value = "";
});

// function from team treehouse lesson.
function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null
    } catch(e) {
        return false
    }
}
let timezone;
if (supportsLocalStorage()) {
    if (localStorage.getItem('send-email')) {
        document.getElementById('cb1').checked = true;
    } else {
        document.getElementById('cb1').checked = false;
    }
    if (localStorage.getItem('set-profile')) {
        document.getElementById('cb2').checked = true;
    } else {
        document.getElementById('cb2').checked = false;
    }
    document.getElementById('timezone').value = localStorage.getItem('timezone');
    console.log(localStorage.getItem('timezone'));
    console.log($('timezone').val);
    let checkbox1 = document.getElementById('cb1');
    let checkbox2 = document.getElementById('cb2');
    checkbox1.addEventListener('click', function() {
        if (document.getElementById('cb1').checked === true) {
            localStorage.setItem('send-email', 'true');
        } else {
            localStorage.setItem('send-email', '');
        }
    });
    checkbox2.addEventListener('click', function() {
        if (document.getElementById('cb2').checked === true) {
            localStorage.setItem('set-profile', 'true');
        } else {
            localStorage.setItem('set-profile', '');
        }
    });
    document.getElementById('timezone').addEventListener('change', function() {
        localStorage.setItem('timezone', document.getElementById('timezone').value);
    });
}