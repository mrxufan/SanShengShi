<template>
	<div class="row">
		<div id="home" class="col-sm-12 text-center">
			<div class="background">
				<h1>欢迎大家品尝pizza!</h1>
				<h2>这里有你非常喜欢的pizza!</h2>
				<button @click="goToMenu" class="btn btn-success">路由跳转</button>
			</div>
		</div>

	</div>
</template>
<script type="text/javascript">
	export default{
		methods:{
			goToMenu(){
				// 跳转到上一次浏览的页面
				// this.$router.go(-1);

				// 指定跳转的地址
				// this.$router.replace('/menu');

				// 指定跳转路由的名字下
				// this.$router.replace({name:'menuLink'});

				// 通过push跳转
				// this.$router.push('/menu');
				this.$router.push({name:'menuLink'});
			}
		}
	}
</script>

<style type="text/css">
#home{background: url('../assets/001.png') no-repeat;height: 85vh;padding: 10%;}
h1,h2{margin: 6%;}
.background{background: #eee;opacity: .8;max-width: 70vw;margin: 0 auto;padding: 20px 0;}
</style>