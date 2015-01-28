module.exports = function(grunt){
	require('jit-grunt')(grunt);
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch:{
			configFiles:{
				files:['prod/sass/**/*.scss','prod/js/**/*.js','app/wp-content/themes/mtgroup/**/*.php'],
				options:{
					livereload: true,
				},
			},

			sass:{
				files:['prod/sass/**/*.scss'],
				tasks: ['sass:deve'],
				options:{
					livereload:true,
				},
			},

			javascript:{
				files:['prod/js/**/*.js','Gruntfile.js'],
				tasks:['jshint','uglify:beauty'],
				options:{
					livereload:true,
				},
			},
		},

		sass: {
			deve: {
				options: {
					style: 'nested',
					sourcemap:'none'
				},
				files: {
					'app/wp-content/themes/mtgroup/css/main.min.css': 'prod/sass/main.scss'
				},
			},
			dist: {
				options: {
					style: 'compressed',
					sourcemap:'none'
				},
				files: {
					'app/wp-content/themes/mtgroup/css/main.min.css': 'prod/sass/main.scss'
				},
			},
		},

		jshint:{
			all:[
				'Gruntfile.js','prod/js/**/*.js'
			]
		},

		uglify:{
			beauty:{
				options:{
					beautify:true
				},
				files:{
			        'app/wp-content/themes/mtgroup/js/output.min.js': ['prod/js/script.js']
			    }
			},
			all:{
				files:{
			        'app/wp-content/themes/mtgroup/js/output.min.js': ['prod/js/script.js']
			    }
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('dev', ['watch']);
	grunt.registerTask('default', ['uglify:all','sass:dist']);

};