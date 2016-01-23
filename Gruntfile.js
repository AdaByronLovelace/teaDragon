module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					'src/js/*.js'
				],
				dest: 'src/js/build/production.js',
			}
		},
		
		uglify: {
			build: {
				src: 'src/js/build/production.js',
				dest: 'dist/js/production.min.js'
			}
		},
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/images/'
				}]
			}
		},

		includereplace: {
			dist: {
			  options: {
				// Task-specific options go here.
			  },
			  // Files to perform replacements and includes with
			  src: 'src/tea.html',
			  // Destination directory to copy files to
			  dest: 'dist/index.html'
			}
		}
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-include-replace');
	grunt.loadNpmTasks('grunt-newer');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['newer:concat', 'newer:uglify', 'newer:imagemin', 'includereplace:dist']);

};