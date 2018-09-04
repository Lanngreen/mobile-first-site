var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins')

;
gulp.task('styles', function() {
    // return wordt hier aangegeven omdat gulp een asynchronous method is
    return gulp.src('./app/assets/css/main.css')
    // alles tussen de brackets [] wordt in volgorde gedaan.
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/css'));
});