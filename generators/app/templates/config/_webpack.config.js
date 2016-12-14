'use strict';

const path = require('path');
const webpack = require('webpack');

const port = 3000;
const srcPath = path.join(__dirname, '/src');
const staticPath = path.join(__dirname, '/src/static');
const testPath = path.join(__dirname, '/test');
const distPath = path.join(__dirname, '/dist');
const publicPath = '/';

var config = {
  output: {
    path: distPath,
    publicPath: publicPath,
    filename: 'app.js'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
    alias: {
      actions: path.join(srcPath, '/actions'),
      components: path.join(srcPath, '/components'),
      containers: path.join(srcPath, '/containers'),
      reducers: path.join(srcPath, '/reducers'),
      helpers: path.join(srcPath, '/helpers'),
      static: path.join(srcPath, '/static')
    }
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'react-hot-loader/!babel-loader', include: [ srcPath, testPath ]},
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
      { test: /\.(sass|scss)$/, loader: 'style-loader!css-loader?minimize!sass-loader', include: [ staticPath ]},
      { test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/, loader: 'url?limit=100000&name=[name].[ext]'},
      { test: /\.(mp4)$/, loader: 'file-loader?name=static/video/[name].[ext]', include: [ path.join(staticPath, '/video') ]}
    ]
  }
};

if(process.env.NODE_ENV == 'production'){

  config = Object.assign(config, {
    entry: [ 'babel-polyfill', './src/index' ],
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  });

}else{

  config = Object.assign(config, {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:'+port,
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      './src/index'
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: Object.assign(config.module, {
      preLoaders: [
        { test: /\.(js|jsx)$/, loader: 'eslint-loader', include: [ srcPath, testPath ]}
      ]
    }),
    devServer: {
      port: port,
      publicPath: publicPath,
      additionalPaths: [ testPath ],
      contentBase: srcPath,
      historyApiFallback: true,
      devtool: 'eval-source-map',
      debug: true,
      hot: true,
      cache: false,
      noInfo: false,
      stats: { colors: true, progress: true },
      watchOptions: {
        aggregateTimeout: 300,
        poll: true
      }
    }
  });

}

module.exports = config;