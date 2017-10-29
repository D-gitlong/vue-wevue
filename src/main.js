// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import store from './store'
import './assets/style/base.css'

Vue.use(echarts)
Vue.use(WeVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
