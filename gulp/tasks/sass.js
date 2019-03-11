module.exports = function(){
    $.gulp.task('sass:dev', function () {
        return $.gulp.src(['src/static/sass/main.+(scss|sass)', 'src/static/sass/libs/*.+(scss|sass)'])
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError(function(err){
                    return {
                        title: 'Sass',
                        message: err.message
                    };
                })
            }))
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions']
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe ($.gulp.dest('build/static/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });

    $.gulp.task('sass:build', function () {
        return $.gulp.src(['src/static/sass/main.+(scss|sass)', 'src/static/sass/libs/*.+(scss|sass)'])
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError(function(err){
                    return {
                        title: 'Sass',
                        message: err.message
                    };
                })
            }))
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions']
						}))
						.pipe($.unit({
							type     :    'px-to-rem',
							rootSize :    16
						}))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe ($.gulp.dest('build/static/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
};