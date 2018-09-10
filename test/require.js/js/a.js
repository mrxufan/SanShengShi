define(function(){
	var method={
		sayName:function(name){
			console.log('我是：'+name);
		},
		msg:function(){
			console.log('This is a message');
		}
	};
	return method; //通过return返回模块的输出
})