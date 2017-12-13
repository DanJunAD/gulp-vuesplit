# gulp-vuesplit

It get script label content of a vue file, and save as a js file

# install

```
npm install --save gulp-vuesplit1
```

# usage

you should write a gulpfile like this
gulpfile.js

```
const gulp = require('gulp');
const ignore = require('gulp-ignore');
const splitVue = require('gulp-vuesplit1');

gulp.task('vue', () => {
    gulp.src('**/*.vue')
        .pipe(ignore('**/node_modules/**'))
        .pipe(splitVue())
        .pipe(gulp.dest('test/_split/vue'));
});

gulp.task('default', () => {
    gulp.run('vue');
});
```
and run this gulpfile

```
gulp
```
