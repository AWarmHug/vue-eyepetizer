import Vue from 'vue'
import Main from './Main.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Swipe, SwipeItem } from 'vue-swipe'

require('vue-swipe/dist/vue-swipe.css')
Vue.component('swipe', Swipe)
Vue.component('swipe-item', SwipeItem)

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
// axios.interceptors.request.use(value => {
//   console.log(`http://baobab.kaiyanapp.com/api/v7${value.url}`)
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Main)
}).$mount('#app')
