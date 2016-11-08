var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat')
;

function errorLog()
{
    console.error(e);
}
gulp.task('watch',function(){
    gulp.watch('app/assets/sass/**/*.scss',['sass']);
    gulp.watch('app/assets/js/**/*.js',['scripts']);
});

gulp.task('sass',function(){
    return gulp.src('app/assets/sass/**/*.scss')
    .pipe(sass())
    .on('error',errorLog)
    .pipe(gulp.dest('app/assets/css'))
});

gulp.task('scripts',function(){
    return gulp.src('app/assets/js/**/*.{json,js}')
          .pipe(concat('bundle.js'))
          .on('error',errorLog)
          .pipe(gulp.dest('app/assets/bundle.js'));
});

gulp.task('default',['sass','scripts','watch']);