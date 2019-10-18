Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Blueberries', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Maya and Zoe\'s house'
      }
    },
    series: [{
      name: 'Maya',
      data: [6, 1, 0, 4]
    }, {
      name: 'Zoe',
      data: [6, 5, 7, 3]
    }]
  });
