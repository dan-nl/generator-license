'use strict';

/**
 * module dependencies
 */
var addAnswersToBase = require( './helpers/add-answers-to-base' );
var getLicenses = require( './helpers/get-licenses' );
var findIndex = require( './helpers/find-index' );

function prompting() {
  var prompts = [];
  var licenses = getLicenses();
  var default_license = 'mit';

  if ( typeof this.package_json.license === 'string' ) {
    default_license = findIndex( licenses, this.package_json.license.toLowerCase() );
  }

  prompts.push(
    {
      type: 'input',
      name: 'author',
      message: 'author',
      default: this.package_json.author
    }
  );

  prompts.push(
    {
      type: 'input',
      name: 'project',
      message: 'project',
      default: this.package_json.name
    }
  );

  prompts.push(
    {
      type: 'list',
      name: 'license',
      message: 'license',
      choices: licenses,
      default: default_license
    }
  );

  prompts.push(
    {
      type: 'input',
      name: 'year',
      message: 'year',
      default: new Date().getUTCFullYear()
    }
  );

  return this.prompt( prompts )
    .then(
      function ( answers ) {
        addAnswersToBase( this, answers );
      }.bind( this )
    );
}

module.exports = prompting;
