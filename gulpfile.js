'use strict';

/**
 * Module dependencies
 */

var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var myth = require('gulp-myth');
var gulp = require('gulp');

/**
 * Compile CSS
 *
 * Includes reset.css first, then all files in '/base'
 * then all other css files.
 */

gulp.task('styles', function() {
  gulp
    .src(['client/modules/index/reset.css', 
      'client/modules/index/!(reset)*.css', 
      'client/modules/!(index)**/*.css'
    ])
    .pipe(myth())
    .pipe(concat('build.css'))
    .pipe(gulp.dest('build'));
});

/**
 * Compile JS
 */

gulp.task('modules', function() {
  gulp
    .src('client/modules/index/index.js')
    .pipe(browserify({buffer: false, debug: true}))
    .pipe(rename('build.js'))
    .pipe(gulp.dest('build/'));
});

/**
 * Default
 */

gulp.task('default', [
  'styles',
  'modules'
]);