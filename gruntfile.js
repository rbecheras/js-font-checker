module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
      jshint: {
        all: ['gruntfile.js', 'main.js']
      },
      browserify: { 'font-checker.js': ['main.js'] },
      uglify: {
        dist: {
          files: {
            'font-checker.min.js': ['font-checker.js']
          }
        }
      }
    });

};
