var gulp = require('gulp');
var less = require('gulp-less');
var clean = require('gulp-rimraf');

gulp.task('default', ['copy', 'less']);

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
      .pipe(less())
      .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy', function() {
  return gulp.src('./html/**/*.*')
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', [], function() {
  return gulp.src("dist/*", { read: false }).pipe(clean());
});