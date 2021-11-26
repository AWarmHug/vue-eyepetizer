import Vue from 'vue'
import Router from 'vue-router'
import EyeDiscover from './views/EyeDiscover.vue'
import EyeRecommend from './views/EyeRecommend.vue'
import EyeDaily from './views/EyeDaily.vue'
import VideoDetail from './views/VideoDetail.vue'
import Main from './Main.vue'
import TagIndex from './views/TagIndex'

Vue.use(Router)

export default new Router({
  // mode: 'hash',
  base: '/dist',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
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
      ],
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/video',
      name: 'video',
      component: VideoDetail,
      props: true,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/tag/:id',
      name: 'tag',
      component: TagIndex,
      props: true,
      meta: {
        keepAlive: true
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
