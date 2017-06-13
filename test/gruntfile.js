module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		/* stylesheet */

		sass: {
			options:{
				outputStyle: 'compressed'
			},
			build: {
				files: {
					'deploy/css/screen.css': ['source/stylesheet/screen.scss']
				}
			}
		},

		postcss: {
			options: {
				map: false,
				processors: [
					require('autoprefixer')({browsers: 'last 5 versions'}),
					require('cssnano')()
				]
			},
			build: {
				files: {
					'deploy/css/screen.css': 'deploy/css/screen.css'
				}
			}
		},

		/* javascript */

		uglify: {
			dist: {
				files: {
					'deploy/js/main.js': [
						'source/javascript/vendor/*.js',
						'source/javascript/components/*.js',
						'source/javascript/*.js'
					]
				}
			}
		},

		/* includereplace */

		includereplace: {
			build: {
				files: [{
					src: 'source/html/*.html',
					dest: 'deploy/',
					flatten: true,
					expand: true
				}]
			}
		},

		/* utility */

		watch: {

			stylesheet: {
				files: ['source/stylesheet/**/*.scss'],
				tasks: ['sass', 'postcss']
			},

			javascript: {
				files: ['source/javascript/**/*.js'],
				tasks: ['uglify']
			},

			html: {
				files: ['source/html/**/*.html'],
				tasks: ['includereplace']
			}
		}
	});

	/* dependencies */

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-include-replace');

	/* tasks */

	grunt.registerTask('default', ['sass', 'postcss', 'uglify', 'includereplace']);
};