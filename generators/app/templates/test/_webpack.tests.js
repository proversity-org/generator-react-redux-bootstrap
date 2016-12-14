
'use strict';

require('babel-polyfill');

const testsContext = require.context('.', true, /Test\.js$/);
testsContext.keys().forEach(testsContext);