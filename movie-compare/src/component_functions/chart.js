//import { getMovies } from "./local-storage";
export const barChart = () => {

    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: getMovies().map((movie) => movie.title),
        datasets: [{
          label: 'Total Domestic Gross',
          data: getMovies().map((movie) => movie.domestic),
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}


