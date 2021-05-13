<template>
  <div class="active-registerd-graph-container">
    <h4>User</h4>
    <canvas id="active-line-chart"></canvas>
  </div>
</template>

<script>
/* eslint-disable */
import Chart from "chart.js";

export default {
  data() {
    return {
      user_data: {},
      chartDatas: {
        type: "line",
        data: {
          labels: [
            "Day 1",
            "Day 2",
            "Day 3",
            "Day 4",
            "Day 5",
            "Day 6"
          ],
          datasets: [
            {
              // one line graph
              label: "Active",
              data: [0, 0, 1, 2, 67, 62, 27, 14],
              backgroundColor: [
                "rgba(51, 204, 204, 0.2)"
              ],
              borderColor: [
               "rgba(51, 204, 204, 1)"
              ],
              borderWidth: 2
            },
            {
              // another line graph
              label: "Registered",
              data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
              backgroundColor: [
               "rgba(255, 99, 132, 0.2)"
              ],
              borderColor: [
               "rgba(255, 99, 132, 1)"
              ],
              borderWidth: 2
            }
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
          },
          legend: {
            display: true,
            position: "top"
          }
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
    }
  },
  mounted() {
    this.createChart("active-line-chart", this.chartDatas);
  }
};
</script>

<style>
</style>

