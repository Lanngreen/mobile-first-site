var gulp = require('gulp'),
    watch = require('gulp-watch'),
     // bij browsersync hebben we alleen het deel create nodig, vandaar dat het zo geschreven is.
    browserSync = require('browser-sync').create()
;

gulp.task('watch', function() {
    // init oftewel initialize zorgt voor de instellingen hoe de server gestart moet worden
        browserSync.init({
            // notify false zorgt ervoor dat het boxje rechts boven van BS niet tevoorschijn komt.
            notify: false,
    
            // Server is om aan tegeven waar de mini server wordt gemaakt en waar hij moet kijken
            server: {
                
                baseDir: "app"
            }
        });
        watch('./app/index.html', function() {
            // reload zorgt ervoor dat de browser herladen wordt zonder heel de pagina te herladen
            browserSync.reload();
        });
    
        watch('./app/assets/css/**/*.css', function() {
            gulp.start('cssInject');
        });
    });

    // alles wat tussen de brackets [] staat wordt eerst uitgevoerd
gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./app/temp/css/main.css')
    .pipe(browserSync.stream());
});

