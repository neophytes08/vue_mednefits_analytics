<template>
  <div class="location-map-container">
    <h4>User that have dependant on platform</h4>
    <canvas id="bar-chart"></canvas>
  </div>
</template>

<script>
/* eslint-disable */
import Chart from "chart.js";
import planetChartData from "../../../chart-data/chart-data.js";

export default {
  data() {
    return {
      planetChartData: planetChartData, // bar chart data
      user_data: {}
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
    this.createChart("bar-chart", this.planetChartData);
  }
};
</script>

<style>

</style>

