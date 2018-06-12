<template>
  <div v-theme:column="'narrow'" id="show-blog">
  	<h1>博客总览</h1>
  	<input type="text" v-model="search" placeholder="搜索">
  	<div class="single-blog" v-for="blog in filterBlog">
  		<!-- 自定义指令 -->
  		<router-link :to="'/blog/'+blog.id">
  			<h3 v-rainbow>{{blog.title | toUppercase}}</h3>
  		</router-link>
  		<article>{{blog.body | snippet}}</article>
  	</div>
  </div>
</template>

<script>


export default {
  name: 'show-blog',
  data(){
  	return{
  		blogs:[],
  		search:''
  	};
  },
  created:function(){
  	this.$http.get('http://jsonplaceholder.typicode.com/posts').then(data=>{
  		// console.log(data);
  		this.blogs=data.body.slice(0,10);
  		console.log(this.blogs);
  	});

/////////////请求本地数据，需把数据放在static文件夹里  
  	// this.$http.get('../../static/posts.json').then(data=>{
  	// 	// console.log(data);
  	// 	this.blogs=data.body.slice(0,10);
  	// 	console.log(this.blogs);
  	// });

  },
  computed:{
  	filterBlog:function(){
  		return this.blogs.filter(blog=>{
  			return blog.title.match(this.search);
  		});
  	}
  },
  filters:{
  	toUppercase:function(value){
  		return value.toUpperCase();
  	}
  },
  directives:{
  	rainbow:{
  		bind(el,binding,vnode){
  			el.style.color = '#'+Math.random().toString().slice(2,8);
  		}
  	}
  }
};
</script>

<style scoped>
#show-blog{max-width: 800px;margin: 0 auto;}
.single-blog{padding: 20px;margin: 20px 0;background-color: #eee;box-sizing: border-box;border: 1px dotted #aaa;}
#show-blog a{text-decoration: none;color: #444;}
input[type='text']{padding: 10px;width: 100%;box-sizing: border-box;}
</style>
