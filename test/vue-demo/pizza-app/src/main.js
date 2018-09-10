// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import {routes} from './routes'
import axios from 'axios'
import {store} from './store/store.js'


Vue.use(VueRouter)

// 配置默认根路径
axios.defaults.baseURL='https://wd5866137243flqsvb.wilddogio.com/'

// 配置Vue原型（在任何组件都可以使用axios）
Vue.prototype.http=axios


const router=new VueRouter({
	routes,
	mode:'history',

	// 滚动行为
	scrollBehavior (to, from, savedPosition) {
	  // return { x: 0, y: 100 }
	  // return{selector:'.btn'}

	  if (savedPosition) {
	  	return savedPosition;
	  } else {
	  	return{x:0,y:0};
	  }
	}
})


// 全局守卫
// router.beforeEach((to,from,next)=>{
// 	// alert('还没有登录，请先登录');
// 	// next()

// 	if (to.path=='/login'||to.path=='/register') {
// 		next();
// 	} else {
// 		alert('还没有登录，请先登录');
// 		next('/login');
// 	}
// })



// 后置钩子
// router.afterEach((to,from)=>{
// 	alert('after each')
// })



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
