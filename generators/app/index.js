
'use strict';

const generators = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = generators.Base.extend({
	constructor: function() {
		generators.Base.apply(this, arguments);
	},
	initializing: function() {
		this.pkg = require('../../package.json');
	},
	prompting: function() {
		var welcomeMessage = `Welcome to ${chalk.yellow.bold('react-redux-bootstrap')} generator.`;
		this.log(yosay(welcomeMessage));

		var prompts = [{
			type: 'input',
			name: 'name',
			message: 'Project name',
			default: this.appname
		}, {
			type: 'input',
			name: 'version',
			message: 'Version',
			default: '1.0.0'
		},{
      type: 'input',
      name: 'description',
      message: 'Description',
      default: ""
    },{
      type: 'input',
      name: 'author',
      message: 'Author',
      default: ''
    },{
      type: 'input',
      name: 'repo',
      message: 'Git repo',
      default: 'https://github.com'
    }];

    return this.prompt(prompts)
    	.then(function(answers) {
    		this.name  				= _.replace(_.toLower(answers.name), " ", "-");
    		this.version 			= answers.version;
    		this.description 	= answers.description;
    	}.bind(this));
	},
	writing: {
		packageJson: function() {
  		this.fs.copyTpl(
  			this.templatePath('_package.json'),
  			this.destinationPath('package.json'),
  			{
  				name: this.name,
  				version: this.version,
  				description: this.description,
  				main: this.main,
  				author: this.author,
          repo: this.repo
  			}
  		);

      this.config.set({'name': this.name});
		},
    dotFiles: function() {
      const dotFolder = 'dotfiles/';
      const dotFiles = ['babelrc', 'editorconfig', 'eslintrc', 'gitignore'];
      this._generateFiles(dotFolder, dotFiles, false, true);
    },
    configFiles: function() {
      const configFolder = 'config/';
      const configFiles = ['circle.yml', 'karma.conf.js', 'publish.sh', 'server.js', 'webpack.config.js'];
      this._generateFiles(configFolder, configFiles, false, false);
    },
    folders: function() {
      var folders = {
        src: {
          actions: null,
          components: null,
          containers: null,
          helpers: null,
          reducers: null,
          static: null
        },
        test: null
      }

      this._createFolders(folders, null);
    },
    test: function() {
      const testFolder = 'test/';
      const testFiles = ['appTests.js', 'webpack.tests.js'];
      this._generateFiles(testFolder, testFiles, true);
    },
    srcFiles: function() {
      const srcFolder = 'src/';
      const srcFiles = ['config.js', 'index.html', 'index.js', 'routes.js', 'stores.js'];
      this._generateFiles(srcFolder, srcFiles, true);
    },
    srcSubFiles: function() {
      const srcSubFiles = [
        ['components/', ['Main.js']],
        ['containers/', ['App.js', 'AsyncMain.js']],
        ['helpers/', ['Request.js', 'Session.js']],
        ['reducers/', ['index.js']],
        ['static/', ['index.scss']]
      ];

      const FOLDER = 0;
      const FILES = 1;

      srcSubFiles.map((subfile) => {
        this._generateFiles(`src/${subfile[FOLDER]}`, subfile[FILES], true, false);
      });

      this.fs.copyTpl(
        this.templatePath('config/_gitkeep'),
        this.destinationPath('src/actions/.gitkeep')
      );
    }
	},
  install: function() {
    this.npmInstall([
        'core-js',
        'isomorphic-fetch',
        'react',
        'react-bootstrap',
        'react-dom',
        'react-redux',
        'react-router',
        'react-router-redux',
        'redux',
        'redux-logger',
        'redux-thunk',
        'webpack'
      ], { 'save': true });

      this.npmInstall([
        'babel-core',
        'babel-eslint',
        'babel-loader',
        'babel-polyfill',
        'babel-preset-es2015',
        'babel-preset-react',
        'babel-preset-stage-0',
        'bower-webpack-plugin',
        'chai',
        'copyfiles',
        'css-loader',
        'css-selector-tokenizer',
        'eslint',
        'eslint-loader',
        'eslint-plugin-react',
        'file-loader',
        'glob',
        'isparta-instrumenter-loader',
        'karma',
        'karma-chai',
        'karma-coverage',
        'karma-mocha',
        'karma-mocha-reporter',
        'karma-phantomjs-launcher',
        'karma-sourcemap-loader',
        'karma-webpack',
        'minimist',
        'mocha',
        'node-sass',
        'null-loader',
        'open',
        'phantomjs-prebuilt',
        'postcss',
        'postcss-loader',
        'raw-loader',
        'react-addons-test-utils',
        'react-hot-loader',
        'rimraf',
        'sass-loader',
        'style-loader',
        'url-loader',
        'webpack-dev-server'
      ], { 'save-dev': true });
  },
  end: function () {
    var endMessage = `The generator ${chalk.yellow.bold('finish')} the ${chalk.yellow.bold('setup')} of your project.\n\n`;
    var howToRun =
      '\To run your project use ' +
      chalk.yellow.bold('npm start') + '\n\n'

     var howToTest =
      '\To test your project use ' +
      chalk.yellow.bold('npm test') + '\n\n'

    this.log(yosay(endMessage + howToRun + howToTest));
  },
  _createFolders: function(folders, parent) {
    for (var folder in folders) {
      var appendParent = parent ? `${parent}/` : '';
      mkdirp(`${appendParent}${folder}`);
      if (folders[folder]) {
        this._createFolders(folders[folder], folder);
      }
    }
  },
  _generateFiles: function(folder, files, includeParent, includeDot) {
    const parent = includeParent ? folder : "";
    const dot = includeDot ? '.' : '';
    files.map((file) => {
      this.fs.copyTpl(
        this.templatePath(`${folder}_${file}`),
        this.destinationPath(`${parent}${dot}${file}`)
      );
    });
    }
});
