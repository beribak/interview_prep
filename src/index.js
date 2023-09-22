import ApexCharts from 'apexcharts'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

const url = "https://gitlab.com/-/snippets/2149167/raw/main/data.json"
let counter = 1

fetch(url)
.then(response => response.json())
.then((data) => {
  data.profiles.forEach((profile) => {
      let labels = []
      let values = []

      profile.data.forEach((data) => {
        labels.push(data.label)
        values.push(data.value)
      })

      document.querySelector("body").insertAdjacentHTML("beforeend", `
        <div class="card" id="one${counter}">
          hjhvjkgvkhgvkhg
        </div>
      `)

      var options = {
        series: values,
        chart: {
        width: 380,
        type: 'donut',
      },
      labels: labels,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
      };
      
      var chart = new ApexCharts(document.querySelector(`#one${counter}`), options);
      chart.render();
      counter += 1
    })
  })

  