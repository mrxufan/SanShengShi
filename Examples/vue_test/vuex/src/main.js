// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueWechatTitle from 'vue-wechat-title'
import {store} from './store/store.js'

Vue.use(VueWechatTitle)

Vue.prototype.$axios=axios

Vue.config.productionTip = false





/* eslint-disable no-new */
new Vue({
  store:store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})