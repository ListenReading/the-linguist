var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    watch      = require('gulp-watch'),
    mocha      = require('gulp-mocha');

// Single entry point to browserify
gulp.task('scripts', function() {
  gulp.src('src/app.js')
  .pipe(watch())
  .pipe(browserify({
    //insertGlobals : true,
    debug: !gulp.env.production,
    transform:  ['coffeeify'],
    extensions: ['.coffee']
  }))
  .pipe(gulp.dest('./build/js'))
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch('src/**/*', ['scripts']);
});

gulp.task('test', function () {
    gulp.src('test/*.js')
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('server', ['scripts', 'watch'], function(){
  // run local server
  require('./server.js');
});

gulp.task('all', ['test', 'server']);

gulp.task('default', ['server']);
