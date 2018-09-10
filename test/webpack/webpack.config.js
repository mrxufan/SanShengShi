var htmlWebpackPlugin= require('html-webpack-plugin');
var minijs=require('uglifyjs-webpack-plugin');

module.exports={
	entry:'./src/app.js',
	output:{
		path:__dirname+'/dist',
		filename:'bundle.js'
	},
	plugins: [
	// new htmlWebpackPlugin()
	// new minijs()
	]
}