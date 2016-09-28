'use strict';

module.exports = function writing() {
  this.fs.copyTpl(
    this.templatePath( this.prompt_answers.license + '.txt' ),
    this.destinationPath( './license.txt' ),
    {
      author: this.package_json.author,
      project: this.package_json.name,
      year: this.prompt_answers.year
    }
  );
};
