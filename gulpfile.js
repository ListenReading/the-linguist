var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    watch      = require('gulp-watch')

// Single entry point to browserify
gulp.task('scripts', function() {
  gulp.src('src/browser-main.js')
  .pipe(watch())
  .pipe(browserify({
    //insertGlobals : true,
    debug : !gulp.env.production
  }))
  .pipe(gulp.dest('./build/js'))
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch('src/**/*', ['scripts']);
});

gulp.task('default', ['scripts', 'watch'],function(){
  // run local server
  require('./server.js');
});