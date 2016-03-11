var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();
var eslint = require("gulp-eslint");
var jasmine = require("gulp-jasmine-phantom");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("default", ["copy-html", "copy-images", "styles", "lint"],function () {
    "use strict";
    gulp.watch("sass/**/*.scss", ["styles"]);
    gulp.watch("/home/neo/projects/node/main.js", ["lint"]);
    gulp.watch("./build/index.html", ["copy-html"]);
    gulp.watch("./build/index.html").on("change", browserSync.reload)
    browserSync.init({
        server: "./dist"
    });
});


gulp.task("dist", ["copy-html", "copy-images", "styles", "lint", "scripts-dist"]);

gulp.task("scripts", function() {
    gulp.src(["/home/neo/projects/node/main.js"])
        .pipe(babel())
        .pipe(concat("all.js"))
        .pipe(gulp.src("/home/neo/projects/node/dist/js"));
});

gulp.task("scripts-dist", function() {
    gulp.src(["/home/neo/projects/node/main.js"])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("all.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write()) 
        .pipe(gulp.src("dist/js"));
});

gulp.task("lint", function () {
    return gulp.src(["/home/neo/projects/node/main.js"])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task("styles", function () {
    "use strict";
    gulp.src("sass/**/*.scss")
        .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
        .pipe(autoprefixer({
            browsers: ["last 2 versions"]
        }))
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
});

gulp.task("tests", function () {
    "use strict";
    gulp.src(["/home/neo/projects/node/spec.js"])
        .pipe(jasmine({
            integration: false,
            vendor: "/home/neo/projects/node/main.js"
        }));
});

gulp.task("copy-html", function () {
    "use strict";
    gulp.src(["./build/index.html"])
        .pipe(gulp.dest("./dist"));
});

gulp.task("copy-images", function () {
    "use strict";
    gulp.src(["img/*"])
        .pipe(gulp.dest("./dist/img"));
});



