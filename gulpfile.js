/**
 * Project Gulp file
 *
 *
 */

var gulp = require('gulp');
var sass = require('gulp-sass');


/**
 * Sass task
 */
gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
});

/**
 * Copy angular
 */
gulp.task('angular', function(){
    return gulp.src('./node_modules/angular/*')
    .pipe(gulp.dest('./js/vendors/angular'))
});


/**
 * Build Task
 */

gulp.task('build', ['angular']);

/**
 * Watch for sass
 *
 */
gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});


