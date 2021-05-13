<template>
  <div class="bar-graph-container">
    <h4>Bar graph</h4>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "../../../chart-data/chart-data.js";

export default {
  data() {
    return {
      planetChartData: planetChartData, // chart data
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
    this.createChart("planet-chart", this.planetChartData);
  }
};
</script>

<style>

</style>

