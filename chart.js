document.addEventListener('DOMContentLoaded', function () {
    const countriesData = [
        { label: 'India', data: [60, 63, 75, 80, 85, 90, 95, 100], color: 'rgb(255, 99, 132)' },
        { label: 'China', data: [70, 75, 85, 90, 95, 100, 105, 110], color: 'rgb(54, 162, 235)' },
        { label: 'Brasil', data: [55, 58, 65, 70, 75, 80, 85, 90], color: 'rgb(75, 192, 192)' },
        { label: 'Estados Unidos', data: [80, 85, 95, 100, 105, 110, 115, 120], color: 'rgb(153, 102, 255)' },
        { label: 'Japón', data: [50, 55, 60, 65, 70, 75, 80, 85], color: 'rgb(255, 159, 64)' }
    ];

    const datasets = countriesData.map(country => ({
        label: country.label,
        data: country.data,
        borderColor: country.color,
        backgroundColor: `${country.color}50`,  // Transparente
        tension: 0.4
    }));

    const ctx = document.getElementById('IdentificacionMercadosChart').getContext('2d');
    const marketChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Demanda de Joyería Artesanal por País',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    suggestedMin: 30,
                    suggestedMax: 150,
                    title: {
                        display: true,
                        text: 'Índice de Demanda',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Año',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });

    // Simulación de actualización de datos
    setInterval(() => updateDatasetData(marketChart), 5000);
});

function updateDatasetData(chart) {
    chart.data.datasets.forEach(dataset => {
        dataset.data = dataset.data.map(value =>
            Math.max(0, Math.min(150, value + (Math.random() - 0.5) * 10))
        );
        console.log(dataset.data); // Log to verify data is updated
    });
    chart.update();
}
