define(function(){
	var method={
		getSex:function(sex){
			console.log('性别：'+sex);
		},
		getAge:function(age){
			console.log('年龄：'+age);
		}
	};
	return method; //通过return返回模块的输出
})