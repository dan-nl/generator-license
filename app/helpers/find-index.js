'use strict';

/**
 * @param {Array} licenses
 * @param {string} license
 * @returns {Array}
 */
function findIndex( licenses, license ) {
  return licenses.reduce(
    function ( accumulator, value, index ) {
      if ( value === license ) {
        accumulator = index;
      }

      return accumulator;
    },
    -1
  );
}

module.exports = findIndex;
