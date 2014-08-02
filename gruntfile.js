module.exports = function(grunt) {

    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        stylus:{
            options:{
                compress:false
            },
            compile: {
                files:[{expand: true, flatten:true, src:["stylus/*.styl"], dest:"css/",ext:".css"}]
            }
        },
        copy:{
            imgs:{
                files:[{expand: true, flatten:true, src:["stylus/i/**/*.png", "stylus/i/**/*.gif"], dest:"css/i/"}]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-stylus");
    grunt.loadNpmTasks("grunt-contrib-copy");
    
    grunt.registerTask("default",["stylus", "copy"]);
};