'use strict';

function initializing() {
  if ( this.package_json ) {
    return;
  }

  this.package_json = this.fs.readJSON( './package.json' );

  if ( !this.package_json ) {
    this.package_json = {};
  }
}

module.exports = initializing;
