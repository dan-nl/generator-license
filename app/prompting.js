'use strict';

var fs = require( 'fs' );
var path = require( 'path' );

function getLicenses() {
  return fs
    .readdirSync( path.join( __dirname, 'templates' ) )
    .reduce(
      function ( accumulator, value ) {
        accumulator.push( value.replace( '.txt', '' ) );
        return accumulator;
      },
      []
    );
}

function findIndex( licenses, license ) {
  return licenses.reduce(
    function( accumulator, value, index ) {
      if ( value === license ) {
        accumulator = index;
      }

      return accumulator;
    },
    -1
  );
}

module.exports = function writing() {
  var prompts = [];
  var licenses = getLicenses();
  var default_license = findIndex( licenses, this.package_json.license.toLowerCase() );

  prompts.push(
    {
      type: 'list',
      name: 'license',
      message: 'which license would you like to use?',
      choices: licenses,
      default: default_license
    }
  );

  prompts.push(
    {
      type: 'input',
      name: 'year',
      message: 'year?',
      default: new Date().getUTCFullYear()
    }
  );

  return this.prompt( prompts )
    .then(
      function ( answers ) {
        this.prompt_answers = answers;
      }.bind( this )
    );
};
