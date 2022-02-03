const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('SASS-SCSS/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['../src/**/*.js'] }))
        .pipe(dest('css'))
}

function watcher() {
    watch(['SASS-SCSS/**/*.scss', '../src/**/*.js'], buildStyles)
}

exports.default = series(buildStyles, watcher)