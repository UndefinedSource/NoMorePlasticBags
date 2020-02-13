window.onload = function (){
    Chart.defaults.global.animation.duration = 2000;

    var a = document.getElementById('myChart');
    var ctx = a.getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Plastic', 'Others'],
            datasets: [{
                label: 'Beach Litter',
                data: [73, 27],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]

        },
        options: {
            responsive: false
            
        }
    });    

    
}

    