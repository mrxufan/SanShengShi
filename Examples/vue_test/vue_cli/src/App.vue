<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view v-wechat-title='$route.meta.title'></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Users from './components/Users.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data(){
  	return{
  		users:[]
  	}
  },
  components:{
  	'app-nav':Nav,
  	'app-footer':Footer,
  	'app-body':Body,
  	'app-users':Users
  }
  
};
</script>

<style>

</style>
