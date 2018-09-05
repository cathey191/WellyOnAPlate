module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      },
    },
  })
}

grunt.loadNpmTasks('grunt-contrib-watch');
