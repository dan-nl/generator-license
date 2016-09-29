'use strict';

/**
 * module dependencies
 */
var addPrompts = require( 'yeoman-prompting-helpers' ).addPrompts;

/**
 * @returns {void}
 */
function initializing() {
  this.package_json =
    this.package_json ||
    this.fs.readJSON( './package.json' ) ||
    '{}';

  this.options.prompts = addPrompts( this );
}

module.exports = initializing;
