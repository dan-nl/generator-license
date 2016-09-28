'use strict';

var generators = require( 'yeoman-generator' );
var generator = {};

generator.initializing = require( './initializing' );
generator.prompting = require( './prompting' );
generator.writing = require( './writing' );

module.exports = generators.Base.extend( generator );
