        // Función de actualización de los datos del gráfico
        function updateDatasetData(chart) {
            chart.data.datasets.forEach(dataset => {
                dataset.data = dataset.data.map(value =>
                    Math.max(0, Math.min(150, value + (Math.random() - 0.5) * 10))
                );
            });
            chart.update();
        }

        // Datos estructurados de los sectores
        const sectorsData = [
            { label: 'Educación', data: [65, 68, 64, 70, 72, 75, 77, 80], color: 'rgb(255, 99, 132)' },
            { label: 'Minería', data: [80, 85, 72, 68, 75, 82, 88, 90], color: 'rgb(54, 162, 235)' },
            { label: 'Salud', data: [60, 63, 75, 78, 76, 80, 82, 85], color: 'rgb(75, 192, 192)' },
            { label: 'Tecnología', data: [85, 92, 98, 105, 110, 118, 125, 130], color: 'rgb(153, 102, 255)' },
            { label: 'Agricultura', data: [70, 73, 68, 72, 75, 74, 77, 80], color: 'rgb(255, 159, 64)' },
            { label: 'Turismo', data: [75, 80, 55, 40, 65, 85, 95, 100], color: 'rgb(255, 205, 86)' },
            { label: 'Manufactura', data: [82, 85, 78, 80, 83, 86, 89, 92], color: 'rgb(201, 203, 207)' },
            { label: 'Energía Renovable', data: [50, 55, 60, 70, 75, 80, 90, 95], color: 'rgb(255, 205, 220)' },
            { label: 'Construcción', data: [85, 88, 92, 100, 110, 120, 130, 140], color: 'rgb(0, 255, 0)' },
            { label: 'Retail', data: [90, 93, 95, 98, 100, 105, 110, 115], color: 'rgb(255, 140, 0)' },
            { label: 'Logística', data: [80, 85, 90, 100, 110, 115, 120, 125], color: 'rgb(128, 0, 128)' },
            { label: 'Telecomunicaciones', data: [100, 105, 110, 115, 120, 125, 130, 135], color: 'rgb(0, 255, 255)' },
            { label: 'Automotriz', data: [55, 60, 65, 70, 75, 80, 85, 90], color: 'rgb(255, 99, 71)' },
            { label: 'Joyeria', data: [50, 5, 60, 65, 70, 75, 80, 85], color: 'rgb(255, 159, 64)' }
        ];

        // Generación de los datasets dinámicamente
        const datasets = sectorsData.map(sector => ({
            label: sector.label,
            data: sector.data,
            borderColor: sector.color,
            backgroundColor: `${sector.color}50`,  // Transparente
            tension: 0.4
        }));

        // Configuración de la gráfica
        const ctx = document.getElementById('marketChart').getContext('2d');
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
                        text: 'Comportamiento del Mercado por Sector',
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
                            text: 'Índice de Crecimiento',
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

        // Navegación entre secciones
        const navLinks = document.querySelectorAll('nav a');
        const sections = document.querySelectorAll('main section');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('data-section');
                
                // Remover la clase 'active' de todas las secciones
                sections.forEach(section => section.classList.remove('active'));

                // Agregar la clase 'active' a la sección correspondiente
                const targetSection = document.getElementById(targetId);
                targetSection.classList.add('active');

                // Hacer scroll suave hacia la sección activa
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // En dispositivos móviles, se asegura que el contenido sea vertical y accesible
        if (window.innerWidth <= 768) {
            document.querySelector('main').style.flexDirection = 'column';
        } else {
            document.querySelector('main').style.flexDirection = 'row';
        }


            // Mejora de accesibilidad con teclado
            link.addEventListener('keydown', function(e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    link.click();
                }
            });
        
