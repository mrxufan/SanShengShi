// 处理任务 引入模块
var gulp=require('gulp');
var imagemin=require('gulp-imagemin');
var uglify=require('gulp-uglify');
var sass=require('gulp-sass');
var concat=require('gulp-concat');
var less=require('gulp-less');


/*
常用的方法

gulp.task 定义任务
gulp.src 找到需要执行任务的文件
gulp.dest 执行任务的文件的去处
gulp.watch 观察文件是否发生变化

*/





// 编译 less，gulp lessTest 保存 less 文件时编译
gulp.task('lessTest', function() {
    gulp.src('src/less/test.less')
      .pipe(less())
      .pipe(gulp.dest('dist/css/less'));
});
// 监听less文件变化，实时编译，执行 gulp watchLess 当 'src/less/test.less' 的 less 文件发生变化，执行 lessTest 方法
gulp.task('watchLess', function() {
    gulp.watch('src/less/test.less', ['lessTest']);
});



// sass转化为css
gulp.task('sass', function() {
    gulp.src('src/scss/style.scss')
      .pipe(sass().on('error',sass.logError))
      .pipe(gulp.dest('dist/css'))
});






// 定义任务（message为自定义）执行任务：在命令行 gulp message
gulp.task('message',function(){
	return console.log('gulp is running');
});





// 执行默认任务(必须是default)
// gulp.task('default',function(){
// 	return console.log('这是默认任务，只需在命令行执行 gulp 即可');
// });




// 拷贝文件 命令行输入gulp copyHtml 会自动创建一个dist文件夹，然后把src里的所有.html文件复制到dist文件夹
gulp.task("copyHtml",function(){
	gulp.src("src/*.html")
		.pipe(gulp.dest("dist"))
});




// 图片压缩 命令行 gulp imageMin
gulp.task('imageMin',function(){
	gulp.src('src/images/gulp.jpg')
		//执行上面定义的任务
		.pipe(imagemin()) 
		//自动在dist文件夹里创建一个images文件夹，并把压缩后的图片放在里面
		.pipe(gulp.dest('dist/images'))
});




// 压缩js 命令行 gulp minify 会在 dist 文件夹下自动创建一个 js 文件夹，并把 file1.js 压缩到此文件夹 
// gulp.task('minify',function(){
// 	gulp.src('src/js/file1.js')
// 	  .pipe(uglify())
// 	  .pipe(gulp.dest('dist/js'))
// })





// 代码合并
gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
    	.pipe(concat('main.js'))
      	.pipe(uglify())
      	.pipe(gulp.dest('dist/js'));
});




// 监听文件是否发生变化 命令行 gulp watch
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/sass/*.sass', ['sass']);
    gulp.watch('src/*.html', ['copyHtml']);
});




// 执行多个任务 命令行 gulp
gulp.task('default',['message','copyHtml','imageMin','scripts','sass']);