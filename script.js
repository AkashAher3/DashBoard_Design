
const ctx = document.getElementById('progressBarChart').getContext('2d');


const progressBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Registered',
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        },
        {
            label: 'Submitted',
            data: [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        },
        
        ]
    },
 
});