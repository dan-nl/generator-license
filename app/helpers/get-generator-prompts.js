'use strict';

/**
 * module dependencies
 */
var getLicenses = require( './get-licenses' );
var findIndex = require( './find-index' );

/**
 * @param {Object} generator
 * @returns {Array}
 */
function getGeneratorPrompts( generator ) {
  var licenses = getLicenses();
  var default_license = 'mit';

  if ( typeof generator.package_json.license === 'string' ) {
    default_license = findIndex( licenses, generator.package_json.license.toLowerCase() );
  }

  return [
    {
      default: generator.package_json.author,
      message: 'author',
      name: 'author',
      store: true,
      type: 'input'
    },
    {
      default: generator.package_json.name,
      message: 'project',
      name: 'project',
      type: 'input'
    },
    {
      choices: licenses,
      default: default_license,
      message: 'license',
      name: 'license',
      store: true,
      type: 'list'
    },
    {
      default: new Date().getUTCFullYear(),
      message: 'copyright year',
      name: 'copyright_year',
      type: 'input'
    }
  ];
}

module.exports = getGeneratorPrompts;
