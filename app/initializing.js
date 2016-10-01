/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var PromptAnswers = require( 'yeoman-prompting-helpers' ).PromptAnswers;

/**
 * @returns {undefined}
 */
function initializing() {
  this.package_json = this.package_json || this.fs.readJSON( './package.json' ) || '{}';
  this.options.PromptAnswers = this.options.PromptAnswers || new PromptAnswers();
}

module.exports = initializing;
