<template>
  <div class="status-clinic-container">
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
    <h3>{{ clinics }}</h3>
    <h5>Clinics</h5>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment';

export default {
  data() {
    return {
      clinics: 0,
      start_date : moment(),
      end_date : moment(),
      isLoading : false,
    };
  },
  created() {
  },
  methods: {
    getActiveClinics( start_date, end_date ){
      this.start_date = start_date;
      this.end_date = end_date;
      this.isLoading = true;
      var data = {
        start : moment( this.start_date ).format('YYYY-MM-DD'),
        end : moment( this.end_date  ).format('YYYY-MM-DD')
      }
      axios.get( axios.defaults.serverUrl + "analytics/active_clinics?start=" + moment( this.start_date ).format('YYYY-MM-DD') + "&end=" + moment( this.end_date ).format('YYYY-MM-DD') )
        .then(res => {
          // console.log( res );
          this.isLoading = false;
          this.clinics = res.data.data.clinic_count;
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

