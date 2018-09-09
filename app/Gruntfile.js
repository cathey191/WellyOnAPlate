module.exports = function (grunt) {
  grunt.initConfig({
    sasslint: {
      target: 'public/sass/*.scss'
    },
    sass: {
      dist: {
        options: {
          style: 'expand'
        },
        files: {
          'public/css/style.css': 'public/sass/style.scss'
        }
      }
    },
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: 'public/css',
            src: ['*.css', '!*.min.css'],
            dest: 'public/css',
            ext: '.min.css'
          }
        ]
      }
    },
    uglify: {
      my_target: {
        files: {
          'public/js/script.min.js': ['public/js/*.js']
        }
      }
    },
    watch: {
      sass: {
        files: ['public/**/*.scss'],
        tasks: ['sasslint', 'sass']
      },
      css: {
        files: ['public/**/*.css'],
        tasks: ['cssmin']
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-sass-lint')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('minfi', ['cssmin', 'uglify'])
  grunt.registerTask('lint', ['sasslint', 'cssmin'])
  grunt.registerTask('w', ['watch'])
}
