/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var getGeneratorPrompts = require( './helpers/get-generator-prompts' );
var promptingHelper = require( 'yeoman-prompting-helpers' ).promptingHelper;

/**
 * @returns {Promise}
 */
function prompting() {
  return promptingHelper( this, getGeneratorPrompts( this ) );
}

module.exports = prompting;
