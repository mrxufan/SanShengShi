<template>
	<div class="users">
		<!-- 添加用户信息 -->
		<form>
			<input placeholder="enter name" type="" name="" v-model="newUser.name">
			<input placeholder="enter email" type="" name="" v-model="newUser.email">
			<button v-on:click="addUser">提交</button>
		</form>

		<!-- 展示用户信息 -->
		<ul>
			<li v-for="(user,index) in users">
				<input type="checkbox" v-model="user.contacted">
				<span :class="{contacted : user.contacted}">
					{{user.name}} ： {{user.email}}<button v-on:click="delUser(index)">x</button>
				</span>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'users',
		data(){
			return{
				newUser:{},
				users:[]
			}
		},
		methods:{
			addUser(e){
				this.users.push({name:this.newUser.name,email:this.newUser.email,contacted:false})
				e.preventDefault()
				
			},
			delUser(i){
				this.users.splice(i, 1)
			}
		},
		created:function(){
			this.$http.get('http://jsonplaceholder.typicode.com/users').then(data=>{
				console.log(data.data)
				data.data.forEach(a=>{
					this.users.push({name:a.username,email:a.email})
				})
			}).catch(error=>{
				console.log(error)
			})
		}
	}
</script>

<style type="text/css" scoped>
.contacted{text-decoration: line-through;}
</style>