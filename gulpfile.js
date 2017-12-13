const gulp = require('gulp');
const ignore = require('gulp-ignore');
const splitVue = require('./index.js');

gulp.task('vue', () => {
    gulp.src('**/*.vue')
        .pipe(ignore('**/node_modules/**'))
        .pipe(splitVue())
        .pipe(gulp.dest('test/_split/vue'));
});

gulp.task('default', () => {
    gulp.run('vue');
});
