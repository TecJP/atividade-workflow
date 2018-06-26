let gulp = require('gulp');
let htmlmin = require('gulp-htmlmin');

gulp.task('minify_html', function() {
    return gulp.src('./source/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
});