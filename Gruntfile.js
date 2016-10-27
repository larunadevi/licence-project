// Generated on 2016-02-22 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn',
    bower: 'grunt-bower-task',
    concat: 'grunt-contrib-concat'
  });

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all', 'newer:jscs:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'newer:jscs:test', 'karma']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'postcss']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '<%= yeoman.app %>/styles/{,*/}*.css',
          '<%= yeoman.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      less: {
        files: ['<%= yeoman.app %>/less/*.less'],
        tasks: ['less:server']
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Make sure code styles are up to par
    jscs: {
      options: {
        config: '.jscsrc',
        verbose: true
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({browsers: ['last 1 version']})
        ]
      },
      server: {
        options: {
          map: true
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      },
      test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        ignorePath:  /\.\.\//,
        fileTypes:{
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
            detect: {
              js: /'(.*\.js)'/gi
            },
            replace: {
              js: '\'{{filePath}}\','
            }
          }
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          // '<%= yeoman.dist %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      js: ['<%= yeoman.dist %>/scripts/{,*/}*.js'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>',
          // '<%= yeoman.dist %>/img',
          '<%= yeoman.dist %>/styles'
        ],
        patterns: {
          js: [[/(img\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
        }
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/styles/styles.css': '.tmp/styles/styles.css',
          '<%= yeoman.dist %>/styles/main.css': '.tmp/styles/main.css',
          '<%= yeoman.dist %>/styles/responsive.css': '.tmp/styles/responsive.css',
          '<%= yeoman.dist %>/styles/styles-transaction.css': '.tmp/styles/styles-transaction.css',
          '<%= yeoman.dist %>/styles/jquerysctipttop.css': '.tmp/styles/jquerysctipttop.css',
        }
      }
    },
    uglify: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/scripts',
          src: '**/*.js',
          dest: '<%= yeoman.dist %>/scripts'
        }]
      }
    },
    concat: {
      dist: {
        //  src: '<%= yeoman.app %>/scripts/{,*/}*.js',
        //  dest: '.tmp/concat/scripts/scripts.js',
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/img',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/img'
        },{
          expand: true,
          cwd: '<%= yeoman.app %>/img/social-icons',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/img/social-icons'
        }],

      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/img',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/img'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    ngtemplates: {
      dist: {
        options: {
          module: 'dashboardApp',
          htmlmin: '<%= htmlmin.dist.options %>',
          usemin: 'scripts/scripts.js'
        },
        cwd: '<%= yeoman.app %>',
        src: 'views/{,*/}*.html',
        dest: '.tmp/templateCache.js'
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/{,*/}*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '{,*/}*.html',
            'img/{,*/}*.{webp}',
            'styles/fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/img',
          dest: '<%= yeoman.dist %>/img',
          src: ['generated/*']
        },{
          expand: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: 'data/*'
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: 'fonts/*',
          dest: '<%= yeoman.dist %>'
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: 'scripts/**/*',
          dest: '<%= yeoman.dist %>'
        }, {
          expand: true,
          cwd: '<%= yeoman.client %>',
          src: 'bower_components/**/*',
          dest: '<%= yeoman.dist %>'
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: 'thirdparty/**/*',
          dest: '<%= yeoman.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      },
      ds: {
        expand: true,
        cwd: '<%= yeoman.app %>/conf/ds',
        dest: '<%= yeoman.dist %>/scripts/',
        src: 'environment.js'
      },
      prod: {
        expand: true,
        cwd: '<%= yeoman.app %>/conf/prod',
        dest: '<%= yeoman.dist %>/scripts/',
        src: 'environment.js'
      },
      stage: {
        expand: true,
        cwd: '<%= yeoman.app %>/conf/stage',
        dest: '<%= yeoman.dist %>/scripts/',
        src: 'environment.js'
      }/*,
      default: {
        expand: true,
        cwd: '<%= yeoman.app %>',
        dest: '<%= yeoman.dist %>',
        src: 'scripts/environment.js'

        /!*expand: true,
        cwd: '<%= yeoman.app %>',
        src: 'scripts/!*',
        dest: '<%= yeoman.dist %>'*!/
      }*/
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },
    // Conver less to css
    less: {
      server: {
        options: {
          paths: ['app/less', 'app/styles']
        },
        files: {
          //	'<%= yeoman.app %>/styles/styles.css': '<%= yeoman.app %>/less/styles.less',
          '<%= yeoman.app %>/styles/main.css': '<%= yeoman.app %>/less/main.less',
          //	'<%= yeoman.app %>/styles/responsive.css': '<%= yeoman.app %>/less/responsive.less'
        }
      }
    },
    bower: {
      install: {
        options: {
          targetDir: '<%= yeoman.dist %>/bower_components',
          layout: 'byType',
          install: true
        }
      }
    }

  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'less:server',
      // 'wiredep',
      'concurrent:server',
      'postcss:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    // 'wiredep',
    'concurrent:test',
    'postcss',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', 'Create build based on environment', function (target) {


    grunt.task.run([
      'clean:dist',
      'less:server',
      'useminPrepare',
      'concurrent:dist',
//    'postcss',
      'ngtemplates',
      'concat',
      'ngAnnotate',
      'copy:dist'
    ]);

    if (target === 'stage') {
      grunt.task.run(['copy:stage']);
    }else if (target === 'prod') {
      grunt.task.run(['copy:prod']);
    }else if (target === 'ds') {
      grunt.task.run(['copy:ds']);
    }

    grunt.task.run([
//    'cdnify',
      'cssmin',
//    'uglify',
      'filerev',
      'usemin',
      'htmlmin'
//	'bower:install'
    ]);

  });

  grunt.registerTask('default', [
    'wiredep',
    'newer:jshint',
    'newer:jscs',
    'test',
    'build'
  ]);
};
