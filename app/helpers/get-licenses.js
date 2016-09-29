'use strict';

/**
 * module dependencies
 */
var fs = require( 'fs' );
var path = require( 'path' );
var map = require( 'lodash.map' );

/**
 * @returns {Array}
 */
function getLicenses() {
  return map(
    fs.readdirSync( path.join( __dirname, '..', 'templates' ) ),
    function iteratee( value ) {
      return value.replace( '.txt', '' );
    }
  );
}

module.exports = getLicenses;
