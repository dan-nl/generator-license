'use strict';

var getLicenses = require( './get-licenses' );
var findIndex = require( './find-index' );

/**
 * @param {Object} generator
 *
 * @returns {Array}
 */
function getModulePrompts( generator ) {
  var licenses = getLicenses();
  var default_license = 'mit';

  if ( typeof generator.package_json.license === 'string' ) {
    default_license = findIndex( licenses, generator.package_json.license.toLowerCase() );
  }

  return [
    {
      type: 'input',
      name: 'author',
      message: 'author',
      default: generator.package_json.author
    },
    {
      type: 'input',
      name: 'project',
      message: 'project',
      default: generator.package_json.name
    },
    {
      type: 'list',
      name: 'license',
      message: 'license',
      choices: licenses,
      default: default_license
    },
    {
      type: 'input',
      name: 'copyright_year',
      message: 'copyright year',
      default: new Date().getUTCFullYear()
    }
  ];
}

module.exports = getModulePrompts;
