const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
// const purgecss = require('gulp-purgecss') // a activer plus tard
function buildStyles() {
    return src('SASS-SCSS/**/*.scss', 'Components/**/*.scss')
        .pipe(sass())
        //   .pipe(purgecss({ content: ['*.html'] })) à activer plus tard avec le purge
        .pipe(dest('css'))
}
function watcher() {
    watch(['SASS-SCSS/**/*.scss', 'Components/**/*.scss'], buildStyles)
}
exports.default = series(buildStyles, watcher)