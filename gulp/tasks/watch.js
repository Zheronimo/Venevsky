module.exports = function(){
    $.gulp.task('watch', function(){
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('src/static/sass/**/*.+(scss|sass)', $.gulp.series('sass:dev'));
        $.gulp.watch('src/static/js/libs/*.js', $.gulp.series('scripts:lib'));
        $.gulp.watch('src/static/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('src/static/js/main.js', $.gulp.series('scripts'));
        $.gulp.watch('src/static/img/**/*', $.gulp.series('img:dev', 'svg:copy'));
    });
};