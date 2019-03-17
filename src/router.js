import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import AR from '@/views/AR.vue'
import WebAR from '@/views/WebAR.vue'
// import WebRTC from '@/views/WebRTC.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/AR',
    name: 'AR',
    component: AR
  }, {
    path: '/WebAR',
    name: 'WebAR',
    component: WebAR
  }]
})
