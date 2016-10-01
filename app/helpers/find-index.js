/* eslint no-underscore-dangle: off */

'use strict';

/**
 * module dependencies
 */
var _findIndex = require( 'lodash.findindex' );

/**
 * @param {Array} collection
 * @param {string} target
 *
 * @returns {Array}
 */
function findIndex( collection, target ) {
  return _findIndex(
    collection,
    function ( item ) {
      return item === target;
    }
  );
}

module.exports = findIndex;
