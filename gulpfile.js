var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    csscomb = require('gulp-csscomb'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    header  = require('gulp-header');


gulp.task('sass-task', function(){
    gulp.src('./scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(header('@charset "utf-8";\n'))
    .pipe(csscomb())
    .pipe(gulp.dest('./css/'));
});

gulp.task('sass', function(){
    gulp.watch('./scss/**/*.scss', function(event) {
        gulp.run('sass-task');
    });
});