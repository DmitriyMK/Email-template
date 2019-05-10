const gulp = require('gulp');
const gutil = require('gulp-util');


/* *************
  Config
************* */

const globalData = {
    mailchimp: require('./src/data/mailchimp.json')
};


/* *************
  CSS
************* */

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const scss = require('postcss-scss');
const autoprefixer = require('autoprefixer');
const postcssProcessors = [
    autoprefixer( { browsers: ['last 2 versions', 'ie > 10'] } )
]

gulp.task('sassInline', function(callback) {
    return gulp.src('src/sass/inline.scss')
        .pipe(
           postcss(postcssProcessors, {syntax: scss})
        )
        .pipe(
            sass({ outputStyle: 'expanded' })
            .on('error', gutil.log)
        )
        .pipe(gulp.dest('build/css/'));
});

gulp.task('sassEmbedded', function(callback) {
    return gulp.src('src/sass/embedded.scss')
        .pipe(
           postcss(postcssProcessors, {syntax: scss})
        )
        .pipe(
            sass({ outputStyle: 'compressed' })
            .on('error', gutil.log)
        )
        .pipe(gulp.dest('build/css/')); 
});



const inlineCss = require('gulp-inline-css');

gulp.task('inlinecss', ['sassInline', 'nunjucks'], function() {
    return gulp.src('build/*.html')
        .pipe(
            inlineCss({
                applyStyleTags: false,
                removeStyleTags: false
            })
            .on('error', gutil.log)
        )
        .pipe(gulp.dest('build/'))
        .pipe(connect.reload());
});





/* *************
  TEMPLATING
************* */

const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const htmlmin = require('gulp-htmlmin');

gulp.task('nunjucks', ['sassEmbedded'], function() {
    return gulp.src('src/emails/*.nunjucks')
        .pipe(
            data(function() {
                return globalData;
            })
            .on('error', gutil.log)
        )
        .pipe(
            nunjucksRender({
                path: ['src/templates/', 'build/css/']
            })
            .on('error', gutil.log)
        )
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build/'));
});


/* *************
    ZIP
************* */

const zip = require('gulp-zip');

gulp.task('zip', function () {
    return gulp.src('build/**')
        .pipe(zip('build.zip'))
        .pipe(gulp.dest('./'));
});


/* *************
	SERVER
************* */

const connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        port: 8000,
        root: 'build',
        livereload:true
    });
});



/* *************
    WATCH
************* */

const filesToWatch = [
    'src/sass/**/*.scss',
    'src/emails/*.nunjucks',
    'src/templates/**/*.nunjucks',
    'src/data/*.json'
]

gulp.task('watch', function() {
    gulp.watch(filesToWatch,['nunjucks', 'inlinecss']); 
});


/* *************
    DEFAULT
************* */

gulp.task('default', ['connect', 'nunjucks', 'inlinecss', 'watch']);