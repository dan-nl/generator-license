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

  if ( !this.prompt_answers.author ) {
    prompts.push(
      {
        type: 'input',
        name: 'author',
        message: 'author',
        default: this.package_json.author
      }
    );
  }

  if ( !this.prompt_answers.project ) {
    prompts.push(
      {
        type: 'input',
        name: 'project',
        message: 'project',
        default: this.package_json.name
      }
    );
  }

  if ( !this.prompt_answers.license ) {
    prompts.push(
      {
        type: 'list',
        name: 'license',
        message: 'license',
        choices: licenses,
        default: default_license
      }
    );
  }

  if ( !this.prompt_answers.copyright_year ) {
    prompts.push(
      {
        type: 'input',
        name: 'copyright_year',
        message: 'copyright year',
        default: new Date().getUTCFullYear()
      }
    );
  }

  if ( prompts.length < 1 ) {
    return;
  }

  this.log( 'prompting for license' );

  return this.prompt( prompts )
    .then(
      function ( answers ) {
        addAnswersToBase( this, answers );
      }.bind( this )
    );
}

module.exports = prompting;
