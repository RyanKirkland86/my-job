window.onload = () => {
      
  $.get( "/api/applications/", data => {
    console.log(data)
    displayApps(data)
    displayResp(data)
    displayInt(data)
    formatData(data)
  });

  function displayApps(data) {
    $('#apps-num').text(data.length);
  }

  function displayResp(data) {
    var count = 0;
    for (var i = 0; i < data.length; i++) {
      var response = data[i].status;
      if (response !== "Applied") {
       count++;
      }
    } 
    $('#responses').text(count);
  }

  function displayInt(data) {
    var count = 0;
    for (var i = 0; i < data.length; i++) {
      var response = data[i].status;
      if (response === "Interview Completed") {
        count++;
      }
    } 
    $('#interviews').text(count);
  }

  function formatData(data) {
    var tracker = {};
    for (var i = 0; i < data.length; i++) {
      var date = dayjs(data[i].createdAt).format('M/D')
      console.log(date);
      if (tracker[date]) {
        tracker[date] = tracker[date] + 1;
      } else {
        tracker[date] = 1;
      }
    }
    var chartX = Object.keys(tracker)
    var chartY = chartX.map(function(keys) {
      return tracker[keys];
    })

    var data = {
      labels: chartX,
      datasets: [{
        label: "Applications By Day",
        backgroundColor: 'rgb(175, 107, 88)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(85, 96, 82)',
        data: chartY,
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
}