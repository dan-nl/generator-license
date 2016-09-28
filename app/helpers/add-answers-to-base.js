'use strict';

/**
 * @param {generators.Base} Base
 * @param {Object} answers
 */
function addAnswersToBase( Base, answers ) {
  if ( !( Base.prompt_answers instanceof Object ) ) {
    Base.prompt_answers = {};
  }

  Object.keys( answers ).reduce(
    function ( accumulator, key ) {
      if ( !Base.prompt_answers[ key ] ) {
        Base.prompt_answers[ key ] = answers[ key ];
      }
    },
    ''
  );
}

module.exports = addAnswersToBase;
