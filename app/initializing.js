/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var loadJson = require( 'yeoman-helpers' ).loadJson;
var PromptAnswers = require( 'yeoman-prompting-helpers' ).PromptAnswers;

/**
 * @returns {undefined}
 */
function initializing() {
  this.options.PromptAnswers = this.options.PromptAnswers || new PromptAnswers();
  this.package_json = loadJson( this.destinationPath( 'package.json' ), { sync: true } );
}

module.exports = initializing;
