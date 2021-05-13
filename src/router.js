import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL;
// axios.defaults.serverUrl = 'http://localhost:3000/';
axios.defaults.serverUrl = 'https://api.medicloud.sg/';

import login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Home from './views/Home.vue'
import User from './views/User.vue'
import Clinic from './views/Clinic.vue'
import Company from './views/Company.vue'
import Finance from './views/Finance.vue'

Vue.use(Router)
Vue.use(axios)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    { path: '*', redirect: '/auth'},
    { path: '/auth', name: 'AnalyticsAuth', component: login },
    {
      path: '/app',
      name: 'dashboard',
      redirect: '/app/dashboard',
      component: Dashboard,
      meta: { auth: true },
      children: [
        { name: 'Home', path: '/app/dashboard', component: Home },
        { name: 'User', path: '/app/user', component: User },
        { name: 'Clinic', path: '/app/clinic', component: Clinic },
        { name: 'Company', path: '/app/company', component: Company },
        { name: 'Finance', path: '/app/finance', component: Finance },
      ]
    },
    
  ]
})
