/* jshint expr:true */
/* global describe, it */

'use strict';

var expect    = require('chai').expect;
var Account  = require('../../app/models/account');
//var dbConnect = require('../../app/lib/mongodb');
//var Mongo     = require('mongodb');

describe('Account', function(){
  it('Should create an account', function(){
    var a = {name:'Will', deposite:400};
    var will = new Account(a);
   expect(will.name).to.equal('Will');
   expect(will.deposite).to.equal(400);
  });
});
