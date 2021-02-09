window.onload = () => {
      
  var days = [];
  for (var i = 1; i < 31; i++) {
    days.push(i);
  }
  var applications = [];
  for (var i = 0; i < 30; i++) {
    var num = Math.floor(Math.random() * 6)
    applications.push(num);
  }
  var data = {
    labels: days,
    datasets: [{
      label: "Applications By Day",
      backgroundColor: 'rgb(175, 107, 88)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(85, 96, 82)',
      data: applications,
    }]
  };
  var options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        stacked: true,
        gridLines: {
          display: true,
          color: 'rgb(85, 96, 82)'
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }
  Chart.Bar('chart', {
    options: options,
    data: data
  })
}