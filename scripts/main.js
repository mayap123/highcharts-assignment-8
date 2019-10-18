Highcharts.chart('container', {

    title: {
        text: 'Number of Students from 4 European Countries Studying Abroad, 2010-2013'
    },

    subtitle: {
        text: 'Source: <a href="http://data.un.org/Data.aspx?q=study+abroad&d=UNESCO&f=series%3aED_FSOABS">UN Data</a>'
    },

    yAxis: {
        title: {
            text: 'Number of Students'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Denmark',
        data: [5328, 6064, 5834, 5254]
    }, {
        name: 'France',
        data: [57174, 60135, 63713, 84059]
    }, {
        name: 'Italy',
        data: [40350, 43799, 47514, 47998]
    }, {
        name: 'Spain',
        data: [23454, 26150, 29881, 28640]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('containerTwo', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Percent of Students from 4 European Countries Learning 1 Foreign Language (International Standard Classification of Education Level 2), 2010-2012'
    },
    subtitle: {
        text: 'Source: <a href="https://appsso.eurostat.ec.europa.eu/nui/show.do?dataset=educ_ilang&lang=en">Eurostat</a>'
    },
    xAxis: {
        categories: ['Denmark', 'Spain', 'France', 'Italy'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 280,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 2010',
        data: [16.5, 59.7, 48, .5]
    }, {
        name: 'Year 2011',
        data: [18.5, 59.2, 47.2, .5]
    }, {
        name: 'Year 2012',
        data: [18.4, 57.7, 46.9, 1.2]
    }]
});
