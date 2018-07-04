var ctx = $("#c");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["January;2015", "February;2015", "March;2015", "January;2016", "February;2016", "March;2016"],
    datasets: [{
      label: '# of Votes',
      xAxisID:'xAxis1',
      data: [12, 19, 3, 5, 2, 3]
    }]
  },
  options:{
    scales:{
      xAxes:[
        {
          id:'xAxis1',
          type:"category",
          gridLines: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
          ticks:{
            callback:function(label){
              var month = label.split(";")[0];
              var year = label.split(";")[1];
              return month;
            },
            hidden:true
          }
        },
        {
          id:'xAxis2',
          type:"category",
          gridLines: {
            drawOnChartArea: true, // only want the grid lines for one axis to show up
          },
          ticks:{
            callback:function(label){
              var month = label.split(";")[0];
              var year = label.split(";")[1];
              if(month === "February"){
                return year;
              }else{
                return "";
              }
            }
          }
        }],
      yAxes:[{
        ticks:{
          beginAtZero:true
        }
      }]
    }
  }
});
let chartData = [500, 1000, 1300, 1100, 2000, 3000, 1000, 500, 2500, 2000, 1200, 1300, 1800, 2800, 1500, 1700, 800, 900, 700, 2000, 2100, 600, 1200, 750, 2400, 2600, 1500, 2800, 1400, 3000]
let label = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
Chart.defaults.line.scales.spanGaps = true;
console.log(Chart.defaults)
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: 'weekly',
            data: chartData,
            backgroundColor: 'rgba(99, 132, 255, 0.2)',
            borderColor: '#6495ed',
            borderWidth: 1,
            lineTension: 0,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                },
                ticks: {
                    beginAtZero:true,
                    autoSkipPadding:3,
                },
            }]
        }
    }
});
let label2 = ["S","M","T","W","T","F","S"];
let chartData2 = [75,100,175,125,225,200,100];
var ctx2 = document.getElementById("weeklyTrafficChart").getContext('2d');
var myChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: label2,
        datasets: [{
            label: 'Daily Trafic',
            data: chartData2,
            backgroundColor: '#6495ed',
            lineTension: 0,
        }]
    },
    labels: {
        legend: {
            boxWidth:0
        }
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
                gridLines: {
                    offsetGridLines: true
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero:false,

                },
                axisOptions: {
                    gridLines: {
                        offsetGridLines: true
                    }
                },
            }]
        }
    }
});