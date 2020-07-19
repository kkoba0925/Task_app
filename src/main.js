// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

var vm = new Vue({
  el: '#tasks-index',
  data: {
    tasks: [
      { id: 1, name: 'Studying JavaScript' },
      { id: 2, name: 'Studying PHP' },
      { id: 3, name: 'Studying Ruby' },
    ]
  }
})

