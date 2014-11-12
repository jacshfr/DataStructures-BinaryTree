'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
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
    }
  });
  grunt.registerTask('test', ['jshint', 'jscs']);
  grunt.registerTask('default', ['test']);
};
