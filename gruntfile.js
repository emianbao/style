module.exports = function(grunt) {

    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        stylus:{
            options:{
                compress:false
            },
            compile: {
                files:[{
                    expand: true,
                    flatten:true,
                    src:["stylus/component/*.styl"],
                    dest:"css/component/",
                    ext:".css"
                }, {
                    expand: true,
                    flatten:true,
                    src:["stylus/app/*.styl"],
                    dest:"css/app/",
                    ext:".css"
                }]
            }
        },
        copy:{
            imgs:{
                files:[{
                    expand: true,
                    flatten:true,
                    src:["stylus/component/i/*.png"],
                    dest:"css/component/i/"
                },{
                    expand: true,
                    flatten:true,
                    src:["stylus/component/iconfont/*.eot","stylus/component/iconfont/*.svg","stylus/component/iconfont/*.ttf","stylus/component/iconfont/*.woff"],
                    dest:"css/component/iconfont/"
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-stylus");
    grunt.loadNpmTasks("grunt-contrib-copy");
    
    grunt.registerTask("default",["stylus", "copy"]);
};