
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
      name: 'main',
      message: 'Entry point',
      default: 'index'
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
    		this.main	 				= _.toLower(answers.main);
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
		},
    dotFiles: function() {
      const dotFilesFolder = 'dotfiles/';
      const dotFiles = ['babelrc', 'editorconfig', 'eslintrc', 'gitignore'];
      dotFiles.map((file) => {
        this.fs.copyTpl(
          this.templatePath(`${dotFilesFolder}_${file}`),
          this.destinationPath(`.${file}`)
        );
      });
    }
	}
});
