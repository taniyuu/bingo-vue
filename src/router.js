import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Bingo from './views/Bingo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'bingo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Bingo
    },
    {
      path: '/condition',
      name: 'condition',
      component: () => import(/* webpackChunkName: "about" */ './views/Condition.vue')
    }
  ]
})
