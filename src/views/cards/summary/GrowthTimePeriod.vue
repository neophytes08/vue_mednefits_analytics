<template>
  <div class="growthTimePeriod-container">
    <h4>Plan growth over time period</h4>
    <canvas id="crowthTimePeriod-chart"></canvas>
    <DateFilter ref="dateFilter" @filterChanged="setDateFilter"></DateFilter>
  </div>
</template>

<script>
import Chart from "chart.js";
import moment from 'moment';
import DateFilter from '../../../views/custom-plugin/DateFilter';

export default {
  components: {
    DateFilter
  },
  data() {
    return {
      user_data: {},
      chartDatas: {
        type: "bar",
        data: {
          labels: ["W1", "W2", "W3", "W4", "W5", "W6"],
          datasets: [
            {
              // one line graph
              label: "Time Period",
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
      start_date : moment(),
      end_date : moment(),
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
    setDateFilter( dates ){
      this.start_date = dates.start;
      this.end_date = dates.end;
      console.log( this.start_date );
      console.log( this.end_date );
    }
  },
  mounted() {
    this.createChart("crowthTimePeriod-chart", this.chartDatas);
  }
};
</script>

<style>
</style>

