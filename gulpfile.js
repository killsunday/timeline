const gulp = require('gulp');
const pump = require('pump');
const less = require('gulp-less');
const lesshint = require('gulp-lesshint');
const eslint = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('watch:css', () => {
    return gulp.watch('src/styles/**/*.less', gulp.parallel('inspect:css', 'build:css'));
});

// build all less files into css
gulp.task('build:css', (done) => {
    return pump([
        gulp.src('src/styles/main.less'),
        sourcemaps.init(),
        less(),
        sourcemaps.write('maps'),
        gulp.dest('public/styles')
    ], done); 
});

// lint all css
gulp.task('inspect:css', (done) => {
    return pump([
        gulp.src('src/styles/**/*.less'),
        lesshint(),
        lesshint.reporter('lesshint-reporter-stylish')
    ], done);
});

// lint all js
gulp.task('inspect:js', (done) => {
    return pump([
        gulp.src('src/*.js'),
        eslint()
    ], done);
});

// run all inspect tasks
gulp.task('inspect', gulp.series('inspect:css', 'inspect:js'));

// run all tasks
gulp.task('default', gulp.series('inspect', 'build:css'));
