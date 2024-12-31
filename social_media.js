// Initialize Charts
document.addEventListener('DOMContentLoaded', function() {
    // Growth Chart
    const growthCtx = document.getElementById('growthChart').getContext('2d');
    new Chart(growthCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Followers',
                    data: [4000, 3000, 2000, 2780, 1890, 2390],
                    borderColor: '#6366f1',
                    tension: 0.4
                },
                {
                    label: 'Engagement',
                    data: [2400, 1398, 9800, 3908, 4800, 3800],
                    borderColor: '#ec4899',
                    tension: 0.4
                },
                {
                    label: 'Reach',
                    data: [2400, 2210, 2290, 2000, 2181, 2500],
                    borderColor: '#14b8a6',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Engagement Chart
    const engagementCtx = document.getElementById('engagementChart').getContext('2d');
    new Chart(engagementCtx, {
        type: 'doughnut',
        data: {
            labels: ['Likes', 'Comments', 'Shares'],
            datasets: [{
                data: [45, 25, 30],
                backgroundColor: [
                    '#0088FE',
                    '#00C49F',
                    '#FFBB28'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false
                }
            }
        }
    });

    // Update last updated time
    function updateLastUpdated() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        document.getElementById('lastUpdated').textContent = timeString;
    }

    // Update time every minute
    updateLastUpdated();
    setInterval(updateLastUpdated, 60000);
});