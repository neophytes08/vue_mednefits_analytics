<template>
  <div class="creditTimePeriod-container">
    <h4>Credit allocated as credit usage over time period</h4>
    <canvas id="creditTimePeriod-chart"></canvas>
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
      chartElement : null,
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
    initializeChart(){
      this.createChart("creditTimePeriod-chart", this.chartDatas);
    },
    createChart(chartid, chartData) {
      const ctx = document.getElementById(chartid);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
      this.chartElement = myChart;
    },
    updateChart( filter, value ){
      if( filter == 'Last 7 days' ){
        var sevenDays = this.generateSevenDays(); 
        this.chartDatas.data.labels = sevenDays;
      }else if( filter == 'by Month' ){
        var weekData = this.generateNumberOfWeeks( value );
        var temp_arr = [];
        var i = 1;
        while( i-1 != weekData.length ){
          temp_arr.push( 'Week ' + i );
          i += 1;
        }
        this.chartDatas.data.labels = temp_arr;
      }

      this.chartElement.update();
    },
    generateSevenDays(){
      var temp_arr = [];
      for( var i = 7; i > 0; i--){
        temp_arr.push( moment().subtract( i-1, 'days' ).format('MMM DD') );
      }
      return temp_arr;
    },
    generateNumberOfWeeks( monthYear ){
      var startMonth = moment( monthYear ).startOf('month');
      var endMonth = moment( monthYear ).endOf('month');
      var temp_arr = [];
      var week_arr = [];
      var day_ctr = 1;
      for( var i = 1; i < moment( day_ctr + " " + monthYear ).startOf('month').isoWeekday(); i++ ){
        week_arr.push(null);
      }
      while( day_ctr-1 != moment( endMonth ).format('D') ){
        week_arr.push( moment( day_ctr + " " + monthYear ).format('MMM DD, YYYY') );
        if( moment( day_ctr + " " + monthYear ).format('dd') == 'Su' || day_ctr == moment( endMonth ).format('D') ){
          temp_arr.push( week_arr );
          week_arr = [];
        }
        day_ctr += 1;
      }
      return temp_arr;
    },
    setDateFilter( filter_data ){
      var filter = this.$refs.dateFilter.filterName;
      this.start_date = filter_data.filter.start;
      this.end_date = filter_data.filter.end;
      this.updateChart( filter, filter_data.value );
    },
  },
  mounted() {
    this.initializeChart();
  }
};
</script>

<style>
</style>

