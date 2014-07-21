var gulp      = require('gulp'),
    jshint    = require('gulp-jshint'),
    livereload = require('gulp-livereload'),
    component = require('gulp-component')

gulp.task('default', ['lint'], function () {
    return gulp.src('component.json')
        .pipe(component({
            standalone: true
        }))
        .pipe(gulp.dest('build'))
})

gulp.task('lint', function () {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
})

gulp.task('watch', function () {
    livereload.listen()
    gulp.watch(['component.json', 'src/**/*', 'index.html'], ['default'])
        .on('change', livereload.changed)
})
