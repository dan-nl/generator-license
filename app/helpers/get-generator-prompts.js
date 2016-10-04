'use strict';

/**
 * module dependencies
 */
var getLicenses = require( './get-licenses' );
var findIndex = require( './find-index' );
var loadJson = require( 'yeoman-helpers' ).loadJson;

/**
 * @param {Object} generator
 * @returns {Array}
 */
function getGeneratorPrompts( generator ) {
  var licenses = getLicenses();
  var default_license = 'mit';
  var package_json;

  package_json = loadJson( generator.destinationPath( 'package.json' ), { sync: true } );

  if ( typeof package_json.license === 'string' ) {
    default_license = findIndex( licenses, package_json.license.toLowerCase() );
  }

  return [
    {
      message: 'create license.txt',
      name: 'create-license',
      type: 'confirm'
    },
    {
      default: package_json.author,
      message: 'author',
      name: 'author',
      store: true,
      type: 'input',
      when: function ( answers ) {
        return answers[ 'create-license' ];
      }
    },
    {
      default: package_json.name,
      message: 'project',
      name: 'project',
      type: 'input',
      when: function ( answers ) {
        return answers[ 'create-license' ];
      }
    },
    {
      choices: licenses,
      default: default_license,
      message: 'license',
      name: 'license',
      type: 'list',
      when: function ( answers ) {
        return answers[ 'create-license' ];
      }
    },
    {
      default: new Date().getUTCFullYear(),
      message: 'copyright year',
      name: 'copyright_year',
      type: 'input',
      when: function ( answers ) {
        return answers[ 'create-license' ];
      }
    }
  ];
}

module.exports = getGeneratorPrompts;
