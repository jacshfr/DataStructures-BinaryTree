'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      all: ['*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: '*.js',
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/app.js']
    }
  });
  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};
