'use strict';

module.exports = function writing() {
  this.fs.copyTpl(
    this.templatePath( this.prompt_answers.license + '.txt' ),
    this.destinationPath( './license.txt' ),
    {
      author: this.prompt_answers.author,
      project: this.prompt_answers.project,
      copyright_year: this.prompt_answers.copyright_year
    }
  );
};
