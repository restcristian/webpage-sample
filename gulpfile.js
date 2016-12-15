var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin');

function errorLog() {
    console.error(e);
}

gulp.task('watch', function() {
    gulp.watch('app/assets/sass/**/*.scss', ['sass']);
    gulp.watch('app/assets/js/**/*.js', ['scripts']);
    gulp.watch('app/assets/imgs/**/', ['imagemin'])
});

gulp.task('sass', function() {
    return gulp.src('app/assets/sass/**/*.scss')
        .pipe(sass())
        .on('error', errorLog)
        .pipe(gulp.dest('app/assets/css'));
});

gulp.task('imagemin', function() {
    return gulp.src('app/assets/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/assets/imgs-opt'));
});

gulp.task('scripts', function() {
    return gulp.src('app/assets/js/**/*.{json,js}')
        .pipe(concat('bundle.js'))
        .on('error', errorLog)
        .pipe(gulp.dest('app/assets/bundle.js'));
});

gulp.task('default', ['sass', 'scripts', 'imagemin', 'watch']);