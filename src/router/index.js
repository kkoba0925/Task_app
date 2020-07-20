import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // added
import Router from 'vue-router'
import About from '@/components/About'
// import store from "./store"

Vue.use(Router)
Vue.use(BootstrapVue) // added

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

export default new Router({
  routes: [
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})