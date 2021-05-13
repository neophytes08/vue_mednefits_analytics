<template>
  <div class="dashboard-container">
    <div class="data-analytics-container">
      <!-- side Nav -->
      <div class="data-header-container">
        <div class="menu-container">
          <i class="fa fa-bars"></i>
        </div>
        <div class="nav-bar-container">
          <ul>
            <li>
              <router-link to="/app/dashboard">
                <i class="fa fa-home"></i>
              </router-link>
            </li>
            <li>
              <router-link to="/app/user">
                <i class="fa fa-user"></i>
              </router-link>
            </li>
            <li>
              <router-link to="/app/clinic">
                <i class="fa fa-medkit"></i>
              </router-link>
            </li>
            <li>
              <router-link to="/app/company">
                <i class="fa fa-building-o"></i>
              </router-link>
            </li>
            <li>
              <router-link to="/app/finance">
                <i class="fa fa-credit-card"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- Header -->
      <div class="data-body-container">
        <div class="data-dash-header">
          <div class="title-container">
            <div>
              <img :src="'../assets/img/mednefits_icon_blue.png'">
            </div>
            <h3>Data Analytics</h3>
          </div>
          <div class="right-title-container">
            <div>
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <div>
              <i class="fa fa-bell" aria-hidden="true"></i>
            </div>
            <div class="profile-title-container">
              <div>
                <img :src="'../assets/img/jeamar.jpg'">
              </div>
              <div>Jeamar Libres</div>
              <div>
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="router-container">
          <router-view></router-view>
        </div>
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
import dashboard from "@/components/dashboard";
export default dashboard;
</script>
