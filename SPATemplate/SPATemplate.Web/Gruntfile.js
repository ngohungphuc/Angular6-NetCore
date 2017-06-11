module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks('grunt-shell');
    grunt.initConfig({
        shell: {
            ngapp: {
                command: 'tsc -p app/ -w'
            }
        },
        tslint: {
            options: {
                configuration: "./tslint.json",
                force: true
            },
            files: {
                src: [
                    "app/**/*.ts"
                ]
            }
        },
        sass: {
            dist: {
                options: {
                    style: "compressed",
                    sourcemap: "inline",
                    trace: true,
                    compass: true
                },
                files: {
                    "wwwroot/css/site.css": "wwwroot/sass/site.scss"
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    "wwwroot/css/site.min.css": [
                        "wwwroot/css/bootstrap.min.css",
                        "wwwroot/css/font-awesome.css",
                        "wwwroot/css/mdb.css",
                        "wwwroot/css/toastr.min.css",
                        "wwwroot/css/site.css"
                    ]
                }
            }
        },
        concat: {
            js: {
                files: {
                    "wwwroot/js/app.min.js": [
                        "wwwroot/node_modules/core-js/client/shim.min.js",
                        "wwwroot/node_modules/zone.js/dist/zone.js",
                        "wwwroot/node_modules/systemjs/dist/system.src.js",
                        "wwwroot/js/systemjs.config.js",
                        "wwwroot/js/mdb.min.js",
                        "wwwroot/js/toastr.min.js"
                    ]
                }
            }
        },
        uglify: {
            options: {
                mangle: false,
                sourceMap: true,
                drop_console: true
            },
            my_target: {
                files: {
                    "wwwroot/js/app.min.js": "wwwroot/js/app.min.js"
                }
            }
        },
        watch: {
            css: {
                files: "wwwroot/sass/*.scss",
                tasks: ["clean:css", "sass", "cssmin"]
            },
            ts: {
                files: "app/**/*.ts",
                tasks: ["tslint"]
            },
            another: {
                files: ["Views/**/*.cshtml", "wwwroot/sass/*.scss", "wwwroot/css/*.css", "wwwroot/app/**/*.js"]
            },
            options: {
                livereload: true
            }
        },
        concurrent: {
            dev: {
                tasks: [
                    "watch", 'shell'
                ],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        clean: {
            css: [
                "wwwroot/css/site.min.css", "wwwroot/css/site.css"
            ],
            js: ["wwwroot/app", "wwwroot/js/app.min.js"]
        }
    });
    grunt.registerTask("default",
        [
            "clean",
            "sass",
            "cssmin",
            "concat",
            "uglify",
            "tslint",
            "concurrent"
        ]);
};