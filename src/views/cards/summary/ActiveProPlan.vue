<template>
  <div class="status-proplan-container">
    <h4 class="status-text">
      Active
      <div v-if="isLoading" class="circle-loader">
        <div class="preloader-container">
          <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-blue-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div><div class="gap-patch">
                <div class="circle"></div>
              </div><div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </h4>
    <h3>{{ pro_plan }}</h3>
    <h5>Pro Plan</h5>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment';

export default {
  data() {
    return {
      pro_plan: 0,
      start_date : moment(),
      end_date : moment(),
      isLoading : false,
    };
  },
  created() {
  },
  methods: {
    getActivePlan( start_date, end_date ){
      this.start_date = start_date;
      this.end_date = end_date;
      this.isLoading = true;
      var data = {
        start : moment( this.start_date ).format('YYYY-MM-DD'),
        end : moment( this.end_date  ).format('YYYY-MM-DD')
      }
      axios.get( axios.defaults.serverUrl + "analytics/active_plans?plan_type=stand_alone_plan&start=" + moment( this.start_date ).format('YYYY-MM-DD') + "&end=" + moment( this.end_date ).format('YYYY-MM-DD') )
        .then(res => {
          // console.log( res );
          this.isLoading = false;
          this.pro_plan = res.data.data.plan_count;
        })
        .catch(err => {
          this.isLoading = false;
          console.log( err.response );
        });
    }
  }
};
</script>

<style lang="scss" scoped>
  @import './src/assets/css/summary-active-cards.scss'
</style>

