var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify');

var PATHS = {
    styles: 'app/assets/sass/**/*.scss',
    scripts: 'app/assets/js/**/*.js',
    images: 'app/assets/imgs/**/'
};
gulp.task('watch', function() {
    gulp.watch(PATHS.styles, ['sass']);
    gulp.watch(PATHS.scripts, ['scripts']);
    gulp.watch(PATHS.images, ['imagemin'])
});

gulp.task('sass', function() {
    return gulp.src(PATHS.styles)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascasde: false
        }))
        .on('error', sass.logError)
        .pipe(gulp.dest('app/assets/css'));
});

gulp.task('imagemin', function() {
    return gulp.src(PATHS.images)
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest('app/assets/imgs-opt'));
});

gulp.task('scripts', function() {
    return gulp.src('app/assets/js/**/*.{json,js}')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('app/assets'));
});

gulp.task('default', ['sass', 'scripts', 'watch']);