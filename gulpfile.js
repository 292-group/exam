const gulp = require('gulp');
var fs = require('fs');
const concat = require('gulp-concat');

gulp.task('firstHtml', async function() {
    fs.mkdirSync('./src');
    fs.open('./src/main.html', 'w', function (err, file) {
        if (err) throw err;
      });
})
gulp.task('firstJs', async function() {
    fs.open('./src/main.js', 'w', function (err, file) {
        if (err) throw err;
      });
})
gulp.task('firstCss', async function() {
    fs.open('./src/main.css', 'w', function (err, file) {
        if (err) throw err;
      });
})

gulp.task('secondHtml', async function(cb) {
    fs.writeFile('./src/main.html', 'contents', cb);
})

gulp.task('secondJs', async function(cb) {
    fs.writeFile('./src/main.js', 'contents', cb);
})

gulp.task('secondCss', async function(cb) {
    fs.writeFile('./src/main.css', 'contents', cb);
})


gulp.task('thirdHtml', async function() {
    return gulp.src('./src/main.html')
    .pipe(concat('mainDist.html'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('thirdJs', async function() {
    return gulp.src('./src/main.js')
    .pipe(concat('mainDist.js'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('thirdCss', async function() {
    return gulp.src('./src/main.css')
    .pipe(concat('mainDist.css'))
    .pipe(gulp.dest('dist/'));
});


gulp.task('first', gulp.parallel('firstHtml','firstJs','firstCss'));
gulp.task('second', gulp.parallel('secondHtml','secondJs','secondCss'));
gulp.task('third', gulp.parallel('thirdHtml', 'thirdJs', 'thirdCss'));
