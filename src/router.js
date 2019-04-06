import Vue from 'vue'
import Router from 'vue-router'
import EyeDiscover from './views/EyeDiscover.vue'
import EyeRecommend from './views/EyeRecommend.vue'
import EyeDaily from './views/EyeDaily.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'discover',
      component: EyeDiscover
    },
    {
      path: '/recommend',
      name: 'recommend',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: EyeRecommend
    },
    {
      path: '/daily',
      name: 'daily',
      component: EyeDaily
    }
  ]
})
