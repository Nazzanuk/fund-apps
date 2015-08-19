var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    //karma = require('gulp-karma'),
    plumber = require('gulp-plumber'),
    webserver = require('gulp-webserver');

var karma = require('karma').server;
var KarmaServer = require('karma').Server;


var paths = {
    src: 'src/',
    release: 'release/',
    public: 'release/public/'
};

gulp.task("default", function () {
    gulp.start([
        'copy-public',
        'gen-css-lib',
        'gen-css',
        'gen-js-lib',
        'gen-js',
        'gen-html'
    ]);
});


gulp.task('unit-test', function (done) {
    return karma.start({
        configFile: __dirname + '/my.conf.js'
    }, done);
});