module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkg,
    concat: {
      options: {
        banner: '(function(window, document){\n',
        footer: '})(window, document);'
      },
      dist: {
        files: {
          'dist/all.js': ['src/site.js']
        }
      }
    },
    uglify: {
      dist: {
        options: {
          sourceMap: function(path) {
            return path.replace(/.js$/, ".map");
          },
          sourceMapPrefix: 1
        },
        files: {
          'dist/all.min.js': ['src/site.js', 'src/util.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['concat', 'uglify']);
}
