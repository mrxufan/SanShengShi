<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submited">
    	<label>博客标题</label>
    	<input type="text" v-model="blog.title" required>

    	<label>博客内容</label>
    	<textarea v-model="blog.content"></textarea>

    	<div id="checkbox">
    		<label>Vue.js</label>
    		<input type="checkbox" value="Vue.js" v-model="blog.categories">
    		<label>Node.js</label>
    		<input type="checkbox" value="Node.js" v-model="blog.categories">
    		<label>React.js</label>
    		<input type="checkbox" value="React.js" v-model="blog.categories">
    		<label>Angular4</label>
    		<input type="checkbox" value="Angular4" v-model="blog.categories">
    	</div>

    	<label>作者：</label>
    	<select v-model="blog.author">
    		<option v-for="author in authors">{{author}}</option>
    	</select>
    	<button v-on:click.prevent="post">添加博客</button>
    </form>
    <h3 v-if="submited">您的博客发布成功</h3>
    <!-- 预览 -->
    <div id="preview">
    	<h3>博客总览</h3>
    	<p>博客标题：{{blog.title}}</p>
    	<p>博客内容：</p>
    	<p>{{blog.content}}</p>
    	<p>博客分类</p>
    	<ul>
    		<li v-for="category in blog.categories">{{category}}</li>
    	</ul>
    	<p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
    	blog:{
    		title:'',
    		content:'',
    		categories:[],
    		author:''
    	},
    	authors:['Lucy','Lilei','Hanmei'],
    	submited:false
    }
  },
  methods:{
  	post:function(){
  		this.$http.post('http://jsonplaceholder.typicode.com/posts',{
  			title:this.blog.title,
  			body:this.blog.content,
  			userId:1
  		}).then(data=>{
  			console.log(data);
  			this.submited=true;
  		});
  	}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{box-sizing: border-box;}
#add-blog{margin: 20px auto;max-width: 600px;padding: 20px;}
label{display: block;margin: 20px 0 10px;}
input[type='text'],textarea,select{display: block;width: 100%;}
textarea{height: 200px;}
#checkbox label{display: inline-block;margin-top: 0;}
#checkbox input{display: inline-block;margin-right: 10px;}
button{display: block;margin: 20px 0;background-color: crimson;border: none;padding: 10px 15px;border-radius: 4px;color: #fff;cursor: pointer;}
#preview{padding: 10px;border: 1px dotted #ccc;margin: 20px 0;}
</style>
