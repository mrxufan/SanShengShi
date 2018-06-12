<template>
	<div class="app-nav">
		<router-link to="/" exact>Users</router-link>
        <router-link to="/body">Body</router-link>
        <router-link to="/footer">Footer</router-link>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'app-nav'
	}
</script>
<style type="text/css">
.app-nav{background-color: #333;margin-bottom: 10px;}
.app-nav a{display: inline-block;padding:10px;text-decoration: none;color: #fff;}
.router-link-active{background-color: red;}
</style>