/* eslint no-invalid-this: off */

'use strict';

/**
 * @returns {undefined}
 */
function writing() {
  this.fs.copyTpl(
    this.templatePath( this.options.PromptAnswers.get( 'license' ) + '.txt' ),
    this.destinationPath( './license.txt' ),
    {
      author: this.options.PromptAnswers.get( 'author' ),
      copyright_year: this.options.PromptAnswers.get( 'copyright_year' ),
      project: this.options.PromptAnswers.get( 'project' )
    }
  );
}

module.exports = writing;
