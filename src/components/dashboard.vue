<script>
/* eslint-disable */
  var dashboard = {
    components: {
		},
    data() {
      return {
        sample : {},
        user_token : null,
        showLoader : false,
      }
    },
    created() {
      // console.log( localStorage.getItem('vue_session') );
      if( localStorage.getItem('vue_session') == null ){
        location.href = '/auth';
      }else{
        this.user_token = localStorage.getItem('vue_session');
      }
    },
    methods: {
      

    }
  }

  export default dashboard
</script>

<style lang="scss">
	@import './src/assets/css/dashboard.scss'
</style>