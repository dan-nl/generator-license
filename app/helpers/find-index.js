'use strict';

/**
 * module dependencies
 */
var _ = require( 'lodash' );

/**
 * @param {Array} collection
 * @param {string} target
 *
 * @returns {Array}
 */
function findIndex( collection, target ) {
  return _.findIndex(
    collection,
    function( item ) {
      return item === target;
    }
  )
}

module.exports = findIndex;
