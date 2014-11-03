var grunt = require('grunt');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-istanbul');

 // in Gruntfile.js
module.exports = function (grunt) {

  grunt.initConfig({
      env: {
      coverage: {
        APP_DIR_FOR_CODE_COVERAGE: '../test/coverage/instrument/app/'
      }
    },
    instrument: {
      files: 'app/tests/*.js',
      options: {
        lazy: true,
        basePath: 'test/instrument/'
      }
    },
    storeCoverage: {
      options: {
        dir: 'test/reports'
      }
    },
    makeReport: {
      src: 'test/reports/**/*.json',
      options: {
        type: 'lcov',
        dir: 'test/reports',
        print: 'detail'
      }
    }
  });

  grunt.registerTask('cover', ['env:coverage','instrument',
    'storeCoverage', 'makeReport']);
};