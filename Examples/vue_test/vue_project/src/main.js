// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Users from './components/Users.vue'
import Test from './components/Test.vue'
import Axios from 'axios'

Vue.prototype.$http= Axios

Vue.config.productionTip = false

// 设置路由
Vue.use(VueRouter)
const router=new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/',component:Users},
		{path:'/test',component:Test}
	]
})



/* eslint-disable no-new */
new Vue({
	router,
  template: `
	<div id="app">
		<ul>
			<li><router-link to="/">Users</router-link></li>
			<router-link to="/test">Test</router-link></li>
		</ul>
		<router-view></router-view>
	</div>
  `
}).$mount('#app')
