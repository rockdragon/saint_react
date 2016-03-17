var gulp = require('gulp');
var path = require('path');
var del = require('del');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');
var webpack = require('gulp-webpack');
var shell = require('gulp-shell');

// cleanup
gulp.task('clean', function () {
    return del([
        './server/assets/dist/bundle.js',
        './server/assets/dist/style.css',
        './server/assets/index.html'
    ]);
});

// build
gulp.task('build', function () {
    gulp.src('./client/html/index.html')
        .pipe(gulp.dest('./server/assets'));
    gulp.src('./client/css/style.css')
        .pipe(gulp.dest('./server/assets/dist/'));
    return gulp.src('./client/js/entry.js')
        .pipe(webpack({
            watch: false,
            output: {
                filename: 'bundle.js'
            },
            module: {
                loaders: [
                    {test: /\.css$/, loader: 'style!css'},
                    {test: /\.js|jsx$/, loader: 'jsx?harmony'}
                ]
            }
        }))
        .pipe(gulp.dest('./server/assets/dist/'));
});

// serve
gulp.task('serve', shell.task([
    'cd server && npm start && cd ..'
]));

gulp.task('watch', function () {
    watch(['./client/**/*'], function () {
        runSequence('clean', 'build');
    });
});

gulp.task('default', ['serve']);
