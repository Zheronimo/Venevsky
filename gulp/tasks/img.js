module.exports = function(){
    $.gulp.task('img:dev', function () {
        return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
            .pipe ($.gulp.dest('build/static/img/'))
    });
    $.gulp.task('img:build', function () {
        return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('y656wTWCKjFNZ_i2M3hgMF1_UvNKt062'))
            .pipe ($.gulp.dest('build/static/img/'))
    });
    $.gulp.task('svg:copy', () => {
        return $.gulp.src('src/static/img/**/*.svg')
            .pipe($.gulp.dest('build/static/img/'));
    });
};