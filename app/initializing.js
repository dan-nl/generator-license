'use strict';

/**
 * @param {generators.Base} Base
 * @returns {void}
 */
function addPromptAnswersToBase( Base ) {
  if ( Base.prompt_answers instanceof Object ) {
    return;
  }

  Base.prompt_answers = {};
}

function addPackageJsonToBase( Base ) {
  if ( Base.package_json instanceof Object ) {
    return;
  }

  Base.package_json = Base.fs.readJSON( './package.json' );

  if ( !Base.package_json ) {
    Base.package_json = {};
  }
}

function initializing() {
  addPackageJsonToBase( this );
  addPromptAnswersToBase( this );
}

module.exports = initializing;
