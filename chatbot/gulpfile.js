const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");


const sassFiles = './src/sass/*.scss';

console.log(sassFiles);

gulp.task('sass', () => {
    return gulp.src(sassFiles)
    .pipe(sourcemaps.init())
        .pipe(sass().on('error',sass.logError))
        // .pipe(sass())
        .pipe(autoprefixer({
            browsers:["last 2 versions"],
            cascade: false
        }))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest("./src/css/"))
        .pipe(rename("styles.min.css"))
        .pipe(cleanCSS())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./src/css/"));
});

gulp.task("sass:watch", () => {
    return gulp.watch(sassFiles, gulp.series('sass'));
  });

