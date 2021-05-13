<script>
/* eslint-disable */
import axios from 'axios';
//imports here

// vue js here
var login = {
  components: {},
  data() {
    return {
      showLoader: false,
      user_data: {},
      loginState: "login",
      showmodal: false,
      login_data: {
        email : null,
        password : null,
      },
    };
  },
  created() {},
  methods: {
    showLoading() {
      this.showLoader = true;
    },
    hideLoading() {
      setTimeout(()=>{
        this.showLoader = false;
      },1000);
    },
    changeState(data) {
      if (data === "login") {
        this.loginState = data;
        //methods here
      } else if (data === "forgot") {
        this.loginState = data;
        //methods here
      } else if (data === "signup") {
        this.loginState = data;
        //methods here
      }
    },
    submitLogin( data ){
      console.log( data );
      if( !data.email ){
        this.$swal( 'Error!', 'Input your email.', 'error');
        return false;
      }
      if( !data.password ){
        this.$swal( 'Error!', 'input your password.', 'error');
        return false;
      }
      this.showLoading();
      axios.post( axios.defaults.serverUrl + "admin/login", data )
        .then(res => {
          console.log( res );
          if( res.data.status ){
            localStorage.setItem('vue_session', res.data.token);
            location.href = "#/app";
          }else{
            this.$swal( 'Error!', 'Invalid credentials.', 'error');
          }
          this.hideLoading();
        })
        .catch(err => {
          console.log( err.response );
          this.$swal( 'Error!', err.response.data.message, 'error');
          this.hideLoading();
        });
    }
  },
};

export default login;
</script>

<style lang="scss" scoped>
@import "./src/assets/css/login.scss";
</style>