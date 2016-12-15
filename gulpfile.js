var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('watch', function() {
    gulp.watch('app/assets/sass/**/*.scss', ['sass']);
    gulp.watch('app/assets/js/**/*.js', ['scripts']);
    gulp.watch('app/assets/imgs/**/', ['imagemin'])
});

gulp.task('sass', function() {
    return gulp.src('app/assets/sass/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascasde: false
        }))
        .on('error', sass.logError)
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
        .pipe(gulp.dest('app/assets'));
});

gulp.task('default', ['sass', 'scripts', 'watch']);