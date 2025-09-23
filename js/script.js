   // Configuration du graphique
        const ctx = document.getElementById('salesChart').getContext('2d');
        
        // Données
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const revenueData = [5000, 4500, 5800, 5700, 5100, 7500, 5000, 4200, 7200, 5800, 2800, 7000];
        const expenseData = [1500, 3500, 1500, 4000, 2200, 4000, 2500, 2800, 3500, 2200, 3800, 3500];
        
        // Ligne de tendance (approximative basée sur l'image)
        const trendData = [5200, 4800, 5900, 5800, 5200, 7600, 5100, 4300, 7400, 5500, 2900, 7200];

        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: months,
                datasets: [
                    {
                        label: 'Revenue',
                        data: revenueData,
                        backgroundColor: '#2563eb', // blue-600
                        borderColor: '#2563eb',
                        borderWidth: 0,
                        borderRadius: 4,
                        borderSkipped: false,
                    },
                    {
                        label: 'Expense',
                        data: expenseData,
                        backgroundColor: '#93c5fd', // blue-300
                        borderColor: '#93c5fd',
                        borderWidth: 0,
                        borderRadius: 4,
                        borderSkipped: false,
                    },
                    {
                        label: 'Trend',
                        data: trendData,
                        type: 'line',
                        backgroundColor: 'transparent',
                        borderColor: '#7c3aed', // purple-600
                        borderWidth: 3,
                        fill: false,
                        tension: 0.4,
                        pointRadius: 0,
                        pointHoverRadius: 0,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    legend: {
                        display: false // Utilisation d'une légende personnalisée
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: 'white',
                        bodyColor: 'white',
                        cornerRadius: 6,
                        displayColors: true,
                        callbacks: {
                            label: function(context) {
                                if (context.dataset.label === 'Trend') {
                                    return 'Trend: $' + context.parsed.y.toLocaleString();
                                }
                                return context.dataset.label + ': $' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        grid: {
                            display: false,
                        },
                        ticks: {
                            color: '#6b7280', // gray-500
                            font: {
                                size: 12
                            }
                        }
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        max: 12000,
                        grid: {
                            color: '#f3f4f6', // gray-100
                            drawBorder: false,
                        },
                        ticks: {
                            color: '#6b7280', // gray-500
                            font: {
                                size: 12
                            },
                            callback: function(value) {
                                return '$' + (value / 1000) + ' 000';
                            },
                            stepSize: 3000
                        }
                    }
                },
                elements: {
                    bar: {
                        borderRadius: 4,
                    }
                }
            }
        });

        // Animation au chargement
        chart.update('show');


  // Configuration du graphique Total Profit (Area Chart)
        const profitCtx = document.getElementById('profitChart').getContext('2d');
        
        const profitChart = new Chart(profitCtx, {
            type: 'line',
            data: {
                labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                datasets: [{
                    data: [8200, 7800, 7500, 8100, 8800, 9200, 8900, 8600, 8300, 8700, 9100, 9300, 8950, 9200, 9500],
                    borderColor: '#10b981', // emerald-500
                    backgroundColor: 'rgba(16, 185, 129, 0.1)', // emerald-500 with opacity
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: '#10b981',
                    pointHoverBorderColor: '#ffffff',
                    pointHoverBorderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: 'white',
                        bodyColor: 'white',
                        cornerRadius: 6,
                        displayColors: false,
                        callbacks: {
                            title: function() {
                                return '';
                            },
                            label: function(context) {
                                return '$' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        display: false,
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        display: false,
                        grid: {
                            display: false
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });

        // Configuration du graphique Promotional Sales (Donut Chart)
        const promotionalCtx = document.getElementById('promotionalChart').getContext('2d');
        
        const promotionalChart = new Chart(promotionalCtx, {
            type: 'doughnut',
            data: {
                labels: ['Youtube', 'Instagram', 'Twitter', 'Facebook'],
                datasets: [
                    {
                        data: [47.5, 26.9, 16.5, 8.2],
                        backgroundColor: [
                            '#ef4444', // red-500
                            '#ec4899', // pink-500
                            '#3b82f6', // blue-500
                            '#1e40af'  // blue-700
                        ],
                        borderWidth: 0,
                        cutout: '40%',
                        spacing: 0
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: 'white',
                        bodyColor: 'white',
                        cornerRadius: 6,
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                },
                elements: {
                    arc: {
                        borderRadius: 8
                    }
                }
            },
            plugins: [{
                beforeDraw: function(chart) {
                    const ctx = chart.ctx;
                    const data = chart.data.datasets[0].data;
                    const colors = chart.data.datasets[0].backgroundColor;
                    const labels = chart.data.labels;
                    
                    // Position des labels sur les arcs
                    chart.data.datasets[0].data.forEach((value, index) => {
                        const meta = chart.getDatasetMeta(0);
                        const arc = meta.data[index];
                        const angle = (arc.startAngle + arc.endAngle) / 2;
                        const radius = (arc.innerRadius + arc.outerRadius) / 2;
                        
                        const x = arc.x + Math.cos(angle) * radius;
                        const y = arc.y + Math.sin(angle) * radius;
                        
                        ctx.save();
                        ctx.fillStyle = 'white';
                        ctx.font = 'bold 14px Arial';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(value + '%', x, y);
                        ctx.restore();
                    });
                }
            }]
        });

        // Interaction avec les boutons de période
        document.querySelectorAll('button').forEach(button => {
            if (['5 D', '2 W', '1 M', '6 M', '1 Y'].includes(button.textContent)) {
                button.addEventListener('click', function() {
                    // Reset all buttons
                    document.querySelectorAll('button').forEach(btn => {
                        if (['5 D', '2 W', '1 M', '6 M', '1 Y'].includes(btn.textContent)) {
                            btn.className = 'px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors';
                        }
                    });
                    
                    // Activate clicked button
                    this.className = 'px-3 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors';
                });
            }
        });

        