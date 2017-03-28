var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify-css')
    rename = require('gulp-rename')
    rimraf = require('gulp-rimraf');

gulp.task('default', ['clean', 'copy', 'less']);

gulp.task('less', function () {
  return  gulp.src('./less/**/theme*.less')
    .pipe(less())
    .pipe(minify())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy', function () {
  return  gulp.src('./html/**/*.*')
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', [], function () {
  return gulp.src("dist/**/*", { read: false })
    .pipe(rimraf());
});