
'use strict';

var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: [ 'PhantomJS' ],
    files: [
      'test/webpack.tests.js'
    ],
    port: 8080,
    captureTimeout: 60000,
    frameworks: [ 'mocha', 'chai' ],
    client: {
      mocha: {}
    },
    singleRun: true,
    reporters: [ 'mocha' ],
    preprocessors: {
      'test/webpack.tests.js': [ 'webpack', 'sourcemap' ]
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};