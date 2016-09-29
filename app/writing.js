'use strict';

/**
 * @returns {void}
 */
function writing() {
  this.fs.copyTpl(
    this.templatePath( this.options.prompts.get( 'license' ) + '.txt' ),
    this.destinationPath( './license.txt' ),
    {
      author: this.options.prompts.get( 'author' ),
      copyright_year: this.options.prompts.get( 'copyright_year' ),
      project: this.options.prompts.get( 'project' )
    }
  );
}

module.exports = writing;
