// Gulp 主体和两个插件
var gulp=require('gulp');
var jshint=require('gulp-jshint');
var uglify=require('gulp-uglify');
// 定义lint任务，验证代码，注意Gulp采取pipe方法，用流的方法直接往下传递
gulp.task('lint',function(){
   return gulp.src('src/test.js')
   .pipe(jshint())
   .pipe(jshint.reporter('default'));    
});
// 定义compress任务，压缩代码
gulp.task('compress',function(){
    return gulp.src('src/test.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});
// 将lint和compress组合起来，并新建默认任务
gulp.task('default',['lint','compress']);