/* globals Chart:false, feather:false */
function setGraph(datas, somas){ 
(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: datas,
      datasets: [{
        data: somas,
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}()) 
}
function setGraph2(datas, somas){ 
  (function () {
    'use strict'
  
    feather.replace()
  
    // Graphs
    var ctx = document.getElementById('myChartBar')
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: datas,
        datasets: [{
          data: somas,
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })
  }()) 
}
  
function graphPizza(data){

  var ctx = document.getElementById('myChartPizza').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['turno 1 '+data[0]+"%", 'turno 2 '+data[1]+"%", 'turno 3 '+data[2]+"%"],
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 000, 64, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 000, 64, 1)'
            ],
            borderWidth: 1
        }]
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
}
function trColor(){
	
	$(".tr1").css("background-color", "rgba(54, 162, 235, 0.2)");
	$(".tr2").css("background-color", "rgba(255, 206, 86, 0.2)");
	$(".tr3").css("background-color", "rgba(255, 000, 64, 0.2)");
	$(".trfim").css({"background-color": "#F8F8FF", "font-size": "18px"});
}