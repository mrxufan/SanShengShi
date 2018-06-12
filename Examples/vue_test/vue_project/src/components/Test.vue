<template>
	<div class="test">
		<h1>{{title}}</h1>
		<p v-if="showName">{{user.name}}-{{user.sex}}</p>
		<p v-else>Nobody</p>
		<ul>
			<li v-for="item in items">{{item.name}}</li>
		</ul>
		<button v-on:click="say('hello world')">按钮</button>
		<input type="text" name="" v-model="inp" v-on:keyup.enter="pressEnter">
		<hr>
		firstName:<input type="" name="" v-model="firstName">
		<br>
		lastName:<input type="" name="" v-model="lastName">
		<h3>计算属性：{{fullName}}</h3>

		<!-- props -->
		<h3>{{msg}}</h3>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'test',
		props:{
			msg:{
				type:String,
				default:'这是默认'
			}
		},
		data(){
			return{
				title:'Hello Vue.js',
				user:{name:'张三',sex:'男'},
				showName:true,
				items:[
					{name:'张三'},
					{name:'张三'},
					{name:'张三'},
				],
				inp:'',
				firstName:'mr',
				lastName:'xu'
			}
		},
		methods:{
			say:function(str){
				alert(str)
			},
			pressEnter:function(){
				console.log(this.inp)
				this.inp=''
			}
		},
		computed:{
			fullName:function(){
				return this.firstName+' '+this.lastName
			}
		}
	}
</script>

<style type="text/css" scoped>
	
</style>