'use strict';

/**
 * module dependencies
 */
var fs = require( 'fs' );
var path = require( 'path' );

/**
 * @returns {Array}
 */
function getLicenses() {
  return fs
    .readdirSync( path.join( __dirname, '..', 'templates' ) )
    .reduce(
      function ( accumulator, value ) {
        accumulator.push( value.replace( '.txt', '' ) );
        return accumulator;
      },
      []
    );
}

module.exports = getLicenses;
