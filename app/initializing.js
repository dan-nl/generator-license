'use strict';

function initializing() {
  if ( this.package_json ) {
    return;
  }

  this.package_json = this.fs.readJSON( './package.json' );
}

module.exports = initializing;
