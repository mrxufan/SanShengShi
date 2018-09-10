<template>
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<!-- new pizza -->
			<app-new-pizza></app-new-pizza>
		</div>
		<div class="col-sm-12 col-md-4">
			<!-- 品种展示 -->
			<h3 class="text-muted my-5">菜单</h3>
			<table class="table">
				<thead class="table table-default">
					<tr>
						<th>品种</th>
						<th>删除</th>
					</tr>
				</thead>
				<tbody v-for="item in getMenuItems" :key="item.name">
					<tr>
						<td>{{item.name}}</td>
						<td>
							<button class="btn btn-outline-danger btn-sm" v-on:click="deleteData(item)">&times;</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script type="text/javascript">
import NewPizza from './NewPizza.vue'


	export default{
		data(){
			return{
				// getMenuItems:[]
			}
		},
		components:{
			'app-new-pizza':NewPizza
		},
		computed:{
			getMenuItems:{
		        // 在vuex中获取数据
		        get(){
		        	// return this.$store.state.menuItems

		        	// 通过getters获取数据
        			return this.$store.getters.getMenuItems
		        },
		        set(){

		        }
		      }
		},
		created(){
			fetch('https://wd5866137243flqsvb.wilddogio.com/menu.json').then(res=>{
				return res.json()
			}).then(data=>{
				let menuArray=[]
				for (let key in data) {
					// console.log(key)
					// console.log(data[key])
					data[key].id=key
					menuArray.push(data[key])
				}

				// 数据同步
				this.$store.commit('setMenuItems',menuArray)
				// this.getMenuItems=menuArray
			})
		},
		methods:{
			deleteData(item){
				fetch('https://wd5866137243flqsvb.wilddogio.com/menu/'+item.id+'/.json',{
					method:'DELETE',
					headers:{
						'Content-type':'application/json'
					}
				}).then(res=>res.json())
				// .then(data=>this.$router.push({name:'menuLink'}))
				.then(data=>{
					this.$store.commit('removeMenuItems',item)
				})
				.catch(err=>console.log(err))
			}
		}

























		// data(){
		// 	return{
		// 		name:'Henry'
		// 	}
		// },
		
		// beforeRouteEnter:(to,from,next)=>{
		// 	 // 不！能！获取组件实例 `this`，因为当守卫执行前，组件实例还没被创建
		// 	// alert('hello'+this.name)
		// 	// next()


		// 	// 通过 `vm` 访问组件实例
		// 	next(vm=>{
		// 		alert('Hello '+vm.name)
		// 	})
		// }


		// beforeRouteLeave (to,from ,next){
		// 	if (confirm('确定离开么')) {
		// 		next();
		// 	} else {
		// 		next(false)
		// 	}
		// }

	}
</script>