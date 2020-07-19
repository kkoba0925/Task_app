import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // added
import Router from 'vue-router'
import Task_kanri_suruyatsu from '@/components/Task_kanri_suruyatsu'
import About from '@/components/About'
// import store from "./store"

Vue.use(Router)
Vue.use(BootstrapVue) // added

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Task_kanri_suruyatsu',
      component: Task_kanri_suruyatsu
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})


