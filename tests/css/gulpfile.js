'use strict';
var gulp = require('gulp');
var config = {
  css: {
    src: 'src/**/*.scss',
    dest: 'dest'
  }
};
var tasks = {
  'compile': [],
  'watch': [],
  'validate': [],
  'clean': [],
  'default': []
};

require('../../index.js')(gulp, config, tasks);

gulp.task('compile', gulp.parallel(tasks.compile));
gulp.task('clean', gulp.parallel(tasks.clean));
gulp.task('validate', gulp.parallel(tasks.validate));
gulp.task('watch', gulp.parallel(tasks.watch));
tasks.default.push('watch');
gulp.task('default', gulp.parallel(tasks.default));
