module.exports = function(){
    $.gulp.task('pug', ()=>   {
        return $.gulp.src('src/pug/*.pug')
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError(function(err){
                    return {
                        title: 'Pug',
                        message: err.message
                    };
                })
            }))
            .pipe($.gp.pug({
			    locals : JSON.parse($.fs.readFileSync('./content.json', 'utf8')),
                pretty:true
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            }))
            .pipe ($.gulp.dest('build'))
            .on('end', $.bs.reload);
    });
};