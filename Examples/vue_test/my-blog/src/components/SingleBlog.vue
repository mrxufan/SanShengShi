<template>
	<div id="single-blog">
		<h1>{{blog.title}}</h1>
		<article>{{blog.body}}</article>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'single-blog',
		data(){
			return{
				id:this.$route.params.id,
				blog:{}
			}
		},
		created:function(){
			this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id).then(data=>{
				// console.log(data)
				this.blog=data.body;
			})
		}
	}
</script>
<style type="text/css">
#single-blog{max-width: 960px;margin: 0 auto;padding: 20px;background-color: #eee;border: 1px dotted #aaa;}
</style>