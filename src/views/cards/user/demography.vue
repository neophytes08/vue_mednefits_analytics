<template>
  <div class="active-registerd-graph-container">
    <div class="demography-header">
      <h4>User Demography base pie and bar graph</h4>
      <div class="toggle-btn-container">
        <button class="active">Base Pie</button>
        <button class="">Bar Graph</button>
      </div>
    </div>
    <canvas id="pie-chart"></canvas>
    <canvas v-show="false" id="bar-chart"></canvas>
  </div>
</template>

<script>
/* eslint-disable */
import Chart from "chart.js";

export default {
  data() {
    return {
      user_data: {},
      barchartDatas: {
        type: "bar",
        data: {
          labels: ["18-25", "26-35", "36-40", "41-50", "51-60", "61-70"],
          datasets: [
            {
              // one line graph
              label: "Numbers",
              data: [0, 0, 1, 2, 67, 62, 27, 14],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
            // { // another line graph
            //   label: 'Planet Mass (x1,000 km)',
            //   data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
            //   backgroundColor: [
            //     'rgba(71, 183,132,.5)', // Green
            //   ],
            //   borderColor: [
            //     '#47b784',
            //   ],
            //   borderWidth: 3
            // }
          ]
        },
        options: {
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }
            ]
          }
        }
      }, // end chart data
      piechartDatas: {
        type: "pie",
        data: {
          labels: ["18-25", "26-35", "36-40", "41-50", "51-60", "61-70"],
          datasets: [
            {
              // one line graph
              label: "Number of Moons",
              data: [0, 0, 1, 2, 67, 62, 27, 14],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          legend: {
            position: "right"
          }
          // scales: {
          //   yAxes: [
          //     {
          //       ticks: {
          //         beginAtZero: true,
          //         padding: 25
          //       }
          //     }
          //   ]
          // }
        }
      } // end chart data
    };
  },
  created() {},
  methods: {
    createChart(chartid, chartData) {
      const ctx = document.getElementById(chartid);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    },
  },
  mounted() {
    this.createChart("pie-chart", this.piechartDatas);
    this.createChart("bar-chart", this.barchartDatas);
  }
};
</script>

<style lang="scss" scoped>
  @import "./src/assets/css/user.scss";
</style>

