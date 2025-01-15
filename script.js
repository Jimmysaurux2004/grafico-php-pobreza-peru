// Función para renderizar el gráfico
function renderChart(data) {
    Highcharts.chart('container', {
        title: {
            text: 'Gráfico histórico del índice de pobreza en el Perú (1997-2020)',
            align: 'left'
        },

        subtitle: {
            text: 'By Jimmy Alexander Huerta Vasquez',
            align: 'left'
        },

        yAxis: {
            title: {
                text: 'Tasa de pobreza (%)'
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 1997 to 2020'
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
                pointStart: 1995
            }
        },

        series: [{
            name: 'Perú',
            data: data
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
}

// Obtener los datos desde el archivo PHP y renderizar el gráfico
fetch('datos.php')
    .then(response => response.json())
    .then(data => {
        renderChart(data.map(value => value ? parseFloat(value) : null)); // Convertir valores a float o null
    })
    .catch(error => console.error('Error al obtener datos:', error));
