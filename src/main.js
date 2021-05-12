import Vue from 'vue';
 
import $ from 'jquery'; 

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// const $ = require('jquery');
window.$ = $; 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
