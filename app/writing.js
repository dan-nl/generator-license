'use strict';

module.exports = function writing() {
  this.fs.copyTpl(
    this.templatePath( this.prompt_answers.license + '.txt' ),
    this.destinationPath( './license.txt' ),
    {
      author: this.prompt_answers.author,
      project: this.prompt_answers.project,
      year: this.prompt_answers.year
    }
  );
};
