<template>
	<nav>
		<ul>
			<li>
				<router-link to="/" exact>博客</router-link>
				<router-link to="/add" exact>写博客</router-link>
			</li>
		</ul>
	</nav>
</template>
<script type="text/javascript">
	export default{
		name:'blog-header'
	}
</script>
<style type="text/css" scoped>
ul{list-style: none;margin: 0;text-align: center;}
li{display: inline-block;margin: 0 10px;}
a{text-decoration: none;padding: 12px;border-radius: 5px;color: #fff;}
nav{background-color: crimson;padding: 20px 0;margin-bottom: 40px;}
.router-link-active{background-color: rgba(255, 255, 255, .8);color: #444;}
</style>