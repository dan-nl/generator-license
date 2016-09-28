'use strict';

/**
 * module dependencies
 */
var addAnswersToBase = require( './helpers/add-answers-to-base' );
var getLicenses = require( './helpers/get-licenses' );
var findIndex = require( './helpers/find-index' );

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
        addAnswersToBase( this, answers );
      }.bind( this )
    );
};
