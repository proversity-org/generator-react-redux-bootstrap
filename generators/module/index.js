'use strict';

const generators = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
const yosay = require('yosay');
const _ = require('lodash');
const htmlWiring = require("html-wiring");

module.exports = generators.Base.extend({
	constructor: function() {
		generators.Base.apply(this, arguments);
	},
	initializing: function() {
		this.pkg = require('../../package.json');
	},
	prompting: function() {
		var welcomeMessage = `Creating a new ${chalk.yellow.bold('module')}.`;
		this.log(yosay(welcomeMessage));

		var prompts = [{
			type: 'input',
			name: 'name',
			message: 'Module name',
			default: 'module'
		},{
      type: 'list',
      name: 'plural',
      message: 'Should the module be in plural?',
      choices: [ "Yes", "No"],
      default: "Yes"
    },{
      type: 'confirm',
      name: 'createAction',
      message: 'Would you like to create an action?',
      default: true
    },{
      type: 'confirm',
      name: 'createReducer',
      message: 'Would you like to create a reducer?',
      default: true
    }];

    return this.prompt(prompts)
    	.then(function(answers) {
    		this.name  				= _.replace(_.toLower(answers.name), " ", "-");
        this.plural = answers.plural;
        this.createAction = answers.createAction;
        this.createReducer = answers.createReducer;
    	}.bind(this));
	},
	writing: function() {
    var s = this.plural === 'Yes' ? 's' : ''
    if (this.createAction) {
      this.fs.copyTpl(
        this.templatePath('_action.js'),
        this.destinationPath('src/actions/' + this.name + `${s}.js`),
        {
          name: this.name,
          nameCapitalize: _.capitalize(this.name),
          nameUppercase: _.toUpper(this.name)
        }
      );
    }

    if (this.createReducer) {
      this.fs.copyTpl(
        this.templatePath('_reducer.js'),
        this.destinationPath('src/reducers/' + this.name + `${s}.js`),
        {
          name: this.name,
          nameUppercase: _.toUpper(this.name)
        }
      );
    }

    this.fs.copyTpl(
      this.templatePath('_container.js'),
      this.destinationPath('src/containers/Async' + _.capitalize(this.name) + `${s}.js`),
      {
        name: this.name + s,
        nameCapitalize: _.capitalize(this.name) + s,
        createAction: this.createAction
      }
    );

    this.fs.copyTpl(
      this.templatePath('_component.js'),
      this.destinationPath('src/components/' + _.capitalize(this.name) + `${s}.js`),
      {
        name: this.name + s,
        nameCapitalize: _.capitalize(this.name) + s
      }
    );

    // Insert route
    var path = `${this.destinationRoot()}/src/routes.js`;
    var file = htmlWiring.readFileAsString(path);
    var hook = '// ----- yeoman hook import routes -----';
    var insert = `import Async${_.capitalize(this.name)}${s} from './containers/Async${_.capitalize(this.name)}${s}'`
    if (!file.includes(insert)) {
      file = file.replace(hook, insert + '\n' + hook);
      htmlWiring.writeFileFromString(file, path);
    }

    hook = '{/* ----- yeoman hook routes ----- */}';
    insert = `<Route path="/${this.name}${s}" component={Async${_.capitalize(this.name)}${s}} />`
    if (!file.includes(insert)) {
      file = file.replace(hook, insert + '\n' + hook);
      htmlWiring.writeFileFromString(file, path);
    }

    if (this.createAction) {
      var path = `${this.destinationRoot()}/src/reducers/index.js`;
      var file = htmlWiring.readFileAsString(path);

      // Insert router
      hook = '// ----- yeoman hook reducers -----';
      insert = `${this.name}s`
      if (!file.includes(insert)) {
        file = file.replace(hook, insert + ',\n' + hook);
        htmlWiring.writeFileFromString(file, path);
      }

      // Insert import router
      hook = '// ----- yeoman hook import reducers -----';
      insert = `import ${this.name}s from 'reducers/${this.name}s'`
      if (!file.includes(insert)) {
        file = file.replace(hook, insert + '\n' + hook);
        htmlWiring.writeFileFromString(file, path);
      }
    }
	},
  end: function () {
    var s = this.plural === 'Yes' ? 's' : ''
    var actionMessage = `Action ${chalk.yellow.bold(this.name + s + '.js')} created.\n\n`;
    var reducerMessage = `Reducer ${chalk.yellow.bold(this.name + 's' + '.js')} created.\n\n`;
    var containerMessage = `Container ${chalk.yellow.bold('Async' + _.capitalize(this.name) + s + '.js')} created.\n\n`;
    var componentMessage = `Component ${chalk.yellow.bold(_.capitalize(this.name) + s + '.js')} created.\n\n`;
    this.log(yosay(actionMessage + reducerMessage + containerMessage + componentMessage));
  }
});