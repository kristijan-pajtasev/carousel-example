module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: {
                    'dist/js/<%= pkg.name %>.js': 'src/js/*.js'
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'dist/css/<%= pkg.name %>.css': 'src/css/*.css'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('min', ['uglify', 'cssmin']);

};