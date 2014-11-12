'use strict';

var chai = require('chai');

var app = require('../app');
var expect = chai.expect;

console.log('hullo');

describe('paragraph word counter', function() {
  it('should count most used word', function() {
    console.log('hullo');
    expect(app('The a is a the of of a is')).to.eql({count: 3, word: 'a'});
  })
})
