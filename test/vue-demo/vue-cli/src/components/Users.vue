<template>
	<div class="app-users">
		<p v-show="users.length==0">加载中...</p>
		<ul>
	    	<li v-for="user in users">{{user.username}}</li>
	    </ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'app-users',
		data(){
			return{
				users:[]
			}
		},
		methods:{
			
		},
		created:function(){
		  	this.$axios.get('http://jsonplaceholder.typicode.com/users').then(response=>{
		  		this.users=response.data;
		  		console.log(this.users)
		  	})
  		}
	};
</script>

<style type="text/css" scoped>
.app-users li{list-style-type: disc;}
</style>