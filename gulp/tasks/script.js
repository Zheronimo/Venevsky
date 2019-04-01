module.exports = function(){
    $.gulp.task('scripts:lib', function () {
        // return $.gulp.src('src/static/js/libs/*.js')
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js','node_modules/svg4everybody/dist/svg4everybody.min.js', 'node_modules/slick-carousel/slick/slick.min.js', 'node_modules/simplebar/dist/simplebar.min.js', 'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js', 'node_modules/jquery-validation/dist/jquery.validate.min.js'])
        .pipe ($.gp.concat('libs.min.js'))
        .pipe ($.gulp.dest('build/static/js/'))
        .pipe($.bs.reload({
            stream: true
        }));
    });

    $.gulp.task('scripts', function () {
        return $.gulp.src('src/static/js/main.js')
        .pipe ($.gulp.dest('build/static/js/'))
        .pipe($.bs.reload({
            stream: true
        }));
    });
};