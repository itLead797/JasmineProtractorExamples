// Karma configuration
// Generated on Wed Jul 15 2015 09:44:02 GMT+0200 (Romance Daylight Time)
'use strict';

var argv = require('yargs').argv;
var minimatch = require("minimatch");


module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // Polyfills.
      'node_modules/core-js/client/shim.min.js',
      'node_modules/intl/dist/Intl.min.js',

      'node_modules/traceur/bin/traceur.js',

      // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Zone.js dependencies
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/jasmine-patch.js',

      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/jquery-mask-plugin/dist/jquery.mask.js',
      'node_modules/bootstrap/js/modal.js',

      // Intl
      'node_modules/intl/locale-data/jsonp/en-US.js',

      // RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      { pattern: 'node_modules/jsonpath-plus/lib/jsonpath.js', included: true },

      // paths loaded via module imports
      // Angular itself
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: true },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

      { pattern: 'dist/dev/**/*.js', included: false, watched: true },
      { pattern: 'dist/dev/**/satelliteLib.js', included: true, watched: false },
      { pattern: 'dist/dev/**/*.html', included: false, watched: true, served: true },
      { pattern: 'dist/dev/**/*.css', included: false, watched: true, served: true },
      { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: false, watched: false }, // PhantomJS2 (and possibly others) might require it


      { pattern: 'node_modules/@ngrx/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/moment/moment.js', included: true, watched: false },
      // suppress annoying 404 warnings for resources, images, etc.
      { pattern: 'dist/dev/assets/**/*', watched: false, included: false, served: true },
      { pattern: 'node_modules/ng2-cookies/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/angular2-logger/**/*.js', included: false, watched: false },
      'test-config.js',
      'dist/dev/app/system-config.js',
      'test-main.js'
    ],

    // must go along with above, suppress annoying 404 warnings.
    proxies: {
      '/assets/': '/base/dist/dev/assets/'
    },

    // list of files to exclude
    exclude: [
      'node_modules/**/*spec.js',
      'dist/dev/**/*.api.spec.js', // Rest/API (Frisby) tests
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'dist/dev/**/!(*.spec|*.po|*.e2e-spec|*.module|satelliteLib).js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage', 'junit'],

    // Report as junit so Bamboo can harvest
    junitReporter: {
      outputDir: 'reports/', // results will be saved as $outputDir/$browserName.xml
      outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true // add browser name to report and classes names
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      // 'PhantomJS'
      //'Chrome'
      'Firefox'
      // 'Chrome_without_security'
    ],


    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      },
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      },
      PhantomJS_without_security: {
        base: 'PhantomJS',
        flags: ['--web-security=no']
      }
    },

    // Configuration options: https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json', subdir: '.', file: 'coverage-final.json' },
        { type: 'html' }
      ],
      check: {
        global: {
          statements: 85,
          branches: 70,
          functions: 80,
          lines: 85
        }
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Passing command line arguments to tests
    client: {
      files: argv.files ? minimatch.makeRe(argv.files).source : null
    }
  });

  if (process.env.APPVEYOR) {
    config.browsers = ['IE'];
    config.singleRun = true;
    config.browserNoActivityTimeout = 90000; // Note: default value (10000) is not enough
  }

  if (process.env.TRAVIS || process.env.CIRCLECI) {
    config.browsers = ['Chrome_travis_ci'];
    config.singleRun = true;
    config.browserNoActivityTimeout = 90000;
  }

  //bamboo_buildKey is an arbitrary environment var that should be set within bamboo
  if (process.env.bamboo_buildKey) {
    config.browsers = ['PhantomJS'];
  }

  if (process.env.USE_PHANTOM) {
    config.browsers = ['PhantomJS'];
  }

  if (process.env.USE_FIREFOX) {
    config.browsers = ['Firefox'];
  }
};
