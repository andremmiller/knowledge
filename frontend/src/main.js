import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false
// temp
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjAzOTk2MzcyLCJleHAiOjE2MDQyNTU1NzJ9.9OdGM_Yku1IvZ2BSpem5RY4PLZO-JICy9gjcwUEwidM'
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')