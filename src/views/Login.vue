<template>
  <div class="login-page">
    <div class="container">
      <div class="analytics-login-container data-mednefits-box">
        <div class="login-header">
          <img :src="'../assets/img/mednefits_logo_v3_(blue)_LARGE.png'">

          <h2>data analytics</h2>
        </div>

        <!-- for login forms -->

        <form v-if="loginState === 'login'" @submit.prevent="submitLogin( login_data )">
          <div class="analytics-input-wrapper">
            <input type="text" placeholder="Email address" v-model="login_data.email">
          </div>

          <div class="analytics-input-wrapper">
            <input type="password" placeholder="Enter password" v-model="login_data.password">
          </div>

          <div class="checkbox-wrapper">
            <label>
              <input type="checkbox">
              Stay signed in
            </label>
          </div>

          <div>
            
            <!-- <router-link to="/app/dashboard"> -->
              <button>Log in</button>
            <!-- </router-link> -->
          </div>

          <div class="reset-login-wrapper">
            <a @click="changeState('forgot')">Forgot password?</a>
          </div>
        </form>

        <!-- for forgot password form -->

        <form v-if="loginState === 'forgot'" class="reset-container">
          <div class="analytics-input-wrapper">
            <input type="text" placeholder="Communication Email address">
          </div>

          <div>
            <button>Reset Password</button>
          </div>

          <div class="reset-login-wrapper">
            <a @click="changeState('login')">Login</a>
          </div>
        </form>

        <!-- for sign up form -->

        <form v-if="loginState === 'signup'" class="signup-container">
          <div class="first-last-container">
            <div class="analytics-input-wrapper">
              <input type="text" placeholder="First name">
            </div>

            <div class="analytics-input-wrapper">
              <input type="text" placeholder="Last name">
            </div>
          </div>

          <div class="analytics-input-wrapper">
            <input type="text" placeholder="Email">
          </div>

          <div class="analytics-input-wrapper">
            <input type="text" placeholder="Password">
          </div>

          <div class="analytics-input-wrapper">
            <input type="text" placeholder="Confrim password">
          </div>

          <div>
            <button>Sign Up</button>
          </div>
        </form>
      </div>

      <transition name="fade">    
        <div v-if="showLoader" class="main-loader">
          <!-- <div class="loader">
            <img :src="'../assets/img/mednefits_icon_blue.png'" style=" width: 25px;margin-top: 20px;">
          </div> -->
          <div class="circle-loader">
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
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import login from "@/components/login";
export default login;
</script>
