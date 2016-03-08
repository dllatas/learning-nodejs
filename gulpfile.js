var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("default", function () {
    "use strict";
    console.log("YO, WHATS UP ??");
});

gulp.task("styles", function () {
    "use strict";
    gulp.src("sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({
            browsers: ["last 2 versions"]
        }))
        .pipe(gulp.dest("./css"));
});

gulp.task("default", function () {
    "use strict";
    gulp.watch("sass/**/*.scss", ["styles"]);
});