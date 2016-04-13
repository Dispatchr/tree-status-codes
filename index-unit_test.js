const assert = require('assert');
const TreeStates = require('./index');

describe('Trees', function() {
  describe('construct status string', function() {
    it('should set status to 2 if tree is in no_trim status', function(){
      assert.equal(TreeStates.fetchStatusCode({ status: 'no_trim' }), '21110000000000');
    });

    it('should set status to 3 if tree is in not_ready status', function(){
      assert.equal(TreeStates.fetchStatusCode({ status: 'not_ready' }), '31110000000000');
    });

    it('should set status to 4 if tree is in ready status', function(){
      assert.equal(TreeStates.fetchStatusCode({ status: 'ready' }), '41110000000000');
    });

    it('should set status to 5 if tree is in worked status', function(){
      assert.equal(TreeStates.fetchStatusCode({ status: 'worked' }), '51110000000000');
    });
  });
});
