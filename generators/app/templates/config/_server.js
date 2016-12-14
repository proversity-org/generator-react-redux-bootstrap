
'use strict';

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new webpackDevServer(webpack(config), config.devServer).listen(config.devServer.port, '0.0.0.0', (err) => {
  if(err){
    console.log(err);
  }
  console.log('Listening at localhost:' + config.devServer.port);
});