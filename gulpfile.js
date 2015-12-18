'use strict';

var        gulp = require('gulp'),
            del = require('del'),
           sass = require('gulp-sass'),
    runSequence = require('run-sequence');

// project config
var config = {
    clean: {
        src: [
            'www/'
        ]
    },
    sass: {
        src: 'assets/scss/uijack.app.scss',
        dest: 'assets/css/'
    },
    libjs: {
        src: [
            'assets/lib/jquery/jquery-2.1.4/dist/jquery.js',
            'assets/lib/bootstrap/dist/js/bootstrap.js',
            'assets/lib/angular/angular.js',
            'assets/lib/angular-animate/angular-animate.js',
            'assets/lib/angular-sanitize/angular-sanitize.js',
            'assets/lib/angular-ui-router/release/angular-ui-router.js',
            'assets/lib/angular-bootstrap/ui-bootstrap.js'
        ],
        dest: 'www/lib'
    },
    images: {
        src: [ 'assets/images/**/*' ],
        dest: 'www/images/'
    },
    defaultcss: {
        src: [ 'assets/lib/bootstrap/dist/css/bootstrap.css' ],
        dest: 'www/css/'
    },
    defaultfonts: {
        src: [ 'assets/lib/bootstrap/dist/fonts/*' ],
        dest: 'www/fonts/'
    },
    defaulttemplates: {
        src: [ 'assets/templates/**/*.html' ],
        dest: 'www/templates/'
    },
    defaultindex: {
        src: ['assets/index.html'],
        dest: 'www/'
    },
    injectToindex: {
        src: 'index.html',
        opt: {
          cwd: 'www',
          base: 'www'
        },
        cssSoruce: [ 'www/css/bootstrap.css' ],
        jsSource: [ 'www/lib/**/*.js' ],
        dest: 'www'
    }
};

// register task

gulp.task('clean', function(done) {
    return del(config.clean.src, done);
});

// gulp.task('libjs', function() {
//   return gulp.src(config.libjs.src)
//     .pipe(gulp.dest(config.libjs.dest))
// });

// gulp.task('images', function() {
//   return gulp.src(config.images.src)
//     .pipe(gulp.dest(config.images.dest));
// });

// gulp.task('defaultcss', function() {
//   return gulp.src(config.defaultcss.src)
//     .pipe(gulp.dest(config.defaultcss.dest));
// });

// gulp.task('defaultfonts', function() {
//   return gulp.src(config.defaultfonts.src)
//     .pipe(gulp.dest(config.defaultfonts.dest));
// });

// gulp.task('defaulttemplates', function() {
//   return gulp.src(config.defaulttemplates.src)
//     .pipe(gulp.dest(config.defaulttemplates.dest));
// });

// gulp.task('defaultindex', function() {
//   return gulp.src(config.defaultindex.src)
//     .pipe(gulp.dest(config.defaultindex.dest));
// });


gulp.task('sass:compile', function(done) {
  return gulp.src(config.sass.src)
    .pipe(sass({outputStyle: 'expanded'}))
    .on('error', sass.logError)
    .pipe(gulp.dest(config.sass.dest));
});

gulp.task('sass:watch',function (){
    gulp.watch('assets/scss/*.scss', ['sass:compile']);
});

gulp.task('default', function(  done ) {
    runSequence(
        'clean',
        'sass:compile',
        'sass:watch',
        // ['libjs', 'images', 'defaultcss', 'defaultfonts', 'defaulttemplates', 'defaultindex'],
        done
    );
});
