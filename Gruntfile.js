module.exports = function(grunt){
	require('jit-grunt')(grunt);
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch:{
			configFiles:{
				files:['prod/sass/**/*.scss','prod/js/**/*.js','app/wp-content/themes/chilerunning_new/**/*.php'],
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
					style: 'nested'
				},
				files: {
					'app/wp-content/themes//*url_theme*//css/main.css': 'prod/sass/main.scss'
				},
			},
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'app/wp-content/themes//*url_theme*//css/main.css': 'prod/sass/main.scss'
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
				}	
			},
			all:{
				files:{
			        'app/wp-content/themes//*url_theme*//js/output.min.js': ['prod/js/scripts.js']
			    }
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('dev', ['watch']);
	grunt.registerTask('default', ['sass:dist','uglify:all']);

};