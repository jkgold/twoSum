"use strict";
var assert = require('assert');
require('chai');
var twoSum = require('../two_sums')

describe('twoSum:', function() {
  describe('calling twoSum', function() {
    it('should return the correct indices when given an array', function() {
      assert.deepEqual([5,6], twoSum([1, 2, 3, 4, 5, 6, 7], 13));
    });
    it('should return "nothing found" when there are no results', function() {
      assert.equal("nothing found", twoSum([1, 2, 3, 4, 5, 6, 7], 20));
    });
    it('should return the correct indices when a  number at a single index adds up to the target', function() {
      assert.deepEqual([2,3], twoSum([5, 2, 1, 3, 4, 5, 6, 7], 4));
    });
  });
});
