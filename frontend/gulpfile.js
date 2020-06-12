"use strict";

const gulp = require("gulp"),
    path = require("path"),
    svgmin = require("gulp-svgmin"),
    rename = require("gulp-rename"),
    inject = require("gulp-inject"),
    rev = require("gulp-rev"),
    svgstore = require("gulp-svgstore"),
    replace = require("gulp-replace");

gulp.task("svg", () => {
    let svgs = gulp
        .src("./src/assets/themes/base/images/icons/*.svg")
        .pipe(svgmin(function (file) {
            let prefix = path.basename(file.relative, path.extname(file.relative));

            return {
                plugins: [
                    {
                        removeTitle: true
                    },
                    {
                        cleanupIDs: {
                            prefix: prefix + "-",
                            minify: true
                        }
                    }
                ]
            };
        }))
        .pipe(rename({ prefix: "icon-" }))
        .pipe(svgstore({ inlineSvg: true }));

    function fileContents(filePath, file) {
        return file.contents.toString();
    }

    return gulp
        .src("./src/index.html")
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest("src"));
});

gulp.task("less", () =>
    gulp.src("./dist/*.css")
        .pipe(rev())
        .pipe(rev.manifest())
        .pipe(gulp.dest("dist/assets"))
);

gulp.task("type-replace", () =>
    gulp.src(["dist/index.html"])
        .pipe(replace("type=\"module\"", "type=\"text/javascript\""))
        .pipe(gulp.dest("dist/"))
);

gulp.task("less:inject", () => {
    let target = gulp.src("./dist/index.html"),
        src = gulp.src("./dist/base*.css", { read: false });

    function fileContents(filePath, file) {
        return `<link id="spqCurrentLinkStylesheetID" rel="stylesheet" href="./${filePath.split("/dist/")[1]}">`;
    }

    return target
        .pipe(inject(src, { transform: fileContents }), { relative: false })
        .pipe(gulp.dest("dist"));
});

/*HELPERS*/
process.on("uncaughtException", (err) => {
    console.error(err.message, err.stack, err.errors);
    process.exit(255);
});

gulp.on("err", (gulpErr) => {
    if (gulpErr.err) {
        console.error("Gulp error details", [gulpErr.err.message, gulpErr.err.stack, gulpErr.err.errors].filter(Boolean));
    }
});
