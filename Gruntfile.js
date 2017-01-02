module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            js: {
                src: [
                    'dev/js/jquery-3.1.1.min.js',
                    'dev/js/materialize.min.js',
                    'dev/js/popup.js'
                ],
                dest: 'dev/js/prebuilt/prod.js'
            },
            css: {
                src: [
                    'dev/css/materialize.css',
                    'dev/css/style.css'
                ],
                dest: 'dev/css/prebuilt/prod.css'
            }
        },
        uglify: {
            js: {
                src: 'dev/js/prebuilt/prod.js',
                dest: 'build/js/prod.min.js'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/css/prod.min.css': ['dev/css/prebuilt/prod.css']
                }
            }
        },
        copy: {
            manifest: {
                expand: false,
                src: 'dev/manifest.json',
                dest: 'build/manifest.json'
            },
            popup: {
                expand: false,
                src: 'dev/popup.html',
                dest: 'build/popup.html'
            },
            img: {
                expand: true,
                cwd: 'dev/img',
                src: '**',
                dest: 'build/img'
            }

        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['concat', 'uglify', 'cssmin', 'copy']);
};