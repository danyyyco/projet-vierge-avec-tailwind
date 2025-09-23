 // Données fictives
    const labels = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'New Customer',
          data: [2000, 3500, 4500, 5800, 4500, 8100, 3200, 8100, 2800, 2700, 3000, 7500],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          tension: 0.4,
          fill: true,
          pointRadius: 0,
          borderWidth: 2
        },
        {
          label: 'Old Customer',
          data: [1500, 2800, 4200, 4400, 2500, 6500, 5000, 4000, 2000, 1800, 4000, 3200],
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.4,
          fill: true,
          pointRadius: 0,
          borderWidth: 2
        }
      ]
    };

    // Configuration du graphique
    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              usePointStyle: true,
              padding: 15,
              color: '#333',
              font: {
                size: 14
              }
            }
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.parsed.y.toLocaleString()}`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)',
              drawBorder: false
            },
            ticks: {
              color: '#6b7280',
              font: {
                size: 12
              }
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#6b7280',
              font: {
                size: 12
              }
            }
          }
        },
        interaction: {
          intersect: false,
          mode: 'index'
        }
      }
    };

    // Créer le graphique
    const ctx = document.getElementById('customerChart').getContext('2d');
    new Chart(ctx, config);