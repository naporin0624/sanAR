import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import IOS from '@/views/IOS.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/IOS',
    name: 'IOS',
    component: IOS
  }]
})
