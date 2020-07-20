// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue' // added
Vue.use(BootstrapVue) // added
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

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
      { id: 1, name: 'テキストボックスにタスクを入力' },
      { id: 2, name: 'CreateTaskボタンをクリックしてタスク生成' },
      { id: 3, name: '完了ボタンを押してタスク完了' },
    ],
    newTask: '',
  },
  methods: {
  createTask: function () {
    var new_id = this.tasks[this.tasks.length - 1].id + 1;
   this.tasks.push({ id: new_id, name: this.newTask, isDeleted: false });
    this.newTask = '';
  },
  doneTask: function (task_id) {
    this.tasks.forEach(function (task) {
     if (task.id === task_id) {
       return task.isDeleted = true;
     }
   })
  }
}})
