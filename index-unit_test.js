const assert = require('assert');
const TreeStates = require('./index');

describe('Trees', function() {
  describe('adding codes', function() {
    it('should add assigned with irate customer', function(){
      var assigned = 'AB';
      var irate_customer = 'AE'
      assert.equal(TreeStates.mixCodes([assigned, irate_customer]), 'AF')
    });

    it('should add assigned with dog', function(){
      var assigned = 'AB';
      var dog = 'AC'
      assert.equal(TreeStates.mixCodes([assigned, dog]), 'AD')
    });

    it('should add dog with irate_customer', function(){
      var irate_customer = 'AE'
      var dog = 'AC'
      assert.equal(TreeStates.mixCodes([irate_customer, dog]), 'AG')
    });

    it('should add dog, bucket and assigned', function(){
      var assigned = 'AB';
      var dog = 'AC'
      var bucket = 'EA'
      assert.equal(TreeStates.mixCodes([assigned, bucket, dog]), 'ED')
    });

    it('should add assigned, irate customer with dog', function(){
      var assigned = 'AB';
      var dog = 'AC'
      var irate_customer = 'AE'
      assert.equal(TreeStates.mixCodes([assigned, irate_customer, dog]), 'AH')
    });
  });

  describe('check if code is part of status', function() {
    it('should return true if tree is assigned', function() {
      var assigned = 'AB';
      // sum of assigned + dog + irate_customer
      var status = 'AH'
      assert.equal(TreeStates.includes(status, assigned), true);
    });

    it('should return false if tree was not refused', function(){
      var refused = 'CA';
      // sum of assigned + dog + irate_customer
      var status = 'AH'
      assert.equal(TreeStates.includes(status, refused), false);
    });
  });
});
