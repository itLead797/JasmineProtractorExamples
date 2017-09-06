var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HTMLReport = require('protractor-html-reporter');
var jasmineReporters = require('jasmine-reporters');

const config = {
  baseUrl: 'http://localhost:5555',
  // baseUrl: 'https://ngi-dev.pdc.np.paas.lmig.com/',

  specs: [
    // Run all scripts
    // 'dist/e2e/**/*.e2e-spec.js'

    // OR just individually
     './dist/e2e/**/smoke.e2e-spec.js',
    //'./dist/e2e/**/happypath.e2e-spec.js',
    './dist/e2e/**/eligibility-kickout.e2e-spec.js',
    //'./dist/e2e/**/ratinginfo-kickout.e2e-spec.js',
      //'./dist/e2e/**/happypath.e2e-spec.js',

  ],

  exclude: [],

  // 'jasmine' by default will use the latest jasmine framework
  framework: 'jasmine',

  // allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    // Timeout for specs (each 'it' block) - https://github.com/angular/protractor/blob/master/docs/timeouts.md
    defaultTimeoutInterval: 400000
  },

  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    // Run tests in parallel
    'shardTestFiles': true,
    // Max concurrent browsers
    'maxInstances': 1,

    'chromeOptions': {
      'args': [
        'disable-extensions'
        , '--no-sandbox'
      // , 'window-size=4000,4000'
      ]
    }
  },

  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true,
        displayDuration: true
      }
    }));

      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
          consolidateAll: true,
          savePath: './',
          filePrefix: 'xmlresults'
      }));

    browser.ignoreSynchronization = true;
  },


  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   */
  useAllAngular2AppRoots: true,

    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');

            //var HTMLReport = require('protractor-html-reporter');

            testConfig = {
                reportTitle: 'TestExecutionReport',
                outputPath: './',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true
            };
            new HTMLReport().from('xmlresults.xml', testConfig);
        });
    }


};

if (process.env.TRAVIS) {
  config.capabilities = {
    browserName: 'firefox'
  };
}




exports.config = config;