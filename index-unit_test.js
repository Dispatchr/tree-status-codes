const assert = require('assert');
const TreeStates = require('./index');

describe('Trees', function() {
  describe('construct status string', function() {
    it('should set status to 2 if tree is in no_trim status', function(){
      assert.equal(TreeStates.fetchStatusCode({ status: 'no_trim' }), '2110000000000');
    });

    it('should set status to 3 if tree is in not_ready status', function(){
      assert.equal(TreeStates.fetchStatusCode({ status: 'not_ready' }), '3110000000000');
    });

    it('should set status to 4 if tree is in ready status', function(){
      assert.equal(TreeStates.fetchStatusCode({ status: 'ready' }), '4110000000000');
    });

    it('should set status to 5 if tree is in worked status', function(){
      assert.equal(TreeStates.fetchStatusCode({ status: 'worked' }), '5110000000000');
    });
  });

  describe('construct status flag object', function() {
    it('should set status key to no_trim', function(){
      var flags = TreeStates.fetchStatusFlags('21101000000000');
      assert.equal(flags.status, 'no_trim');
    });

    it('should set source to lidar', function(){
      var flags = TreeStates.fetchStatusFlags('21101000000000');
      assert.equal(flags.source, 'lidar');
      assert.equal(flags.notify_customer, false);
      assert.equal(flags.ntw_needed, false);
      assert.equal(flags.access_issue, false);
      assert.equal(flags.refused, false);
      assert.equal(flags.vehicle_type, undefined);
      assert.equal(flags.environmental, undefined);
    });


    it('should set priority to routine', function(){
      var flags = TreeStates.fetchStatusFlags('21101000000000');
      assert.equal(flags.priority, 'routine');
    });

    it('should not set vc codes', function(){
      var flags = TreeStates.fetchStatusFlags('21101000000000');
      assert.equal(flags.vc_codes, undefined);
    });

    it('should set assigned flag to true', function(){
      var flags = TreeStates.fetchStatusFlags('21101000000000');
      assert.equal(flags.assigned, true);
    });

    it('should set dog flag to false', function(){
      var flags = TreeStates.fetchStatusFlags('21101000000000');
      assert.equal(flags.dog, false);
    });

    it('should set irate_customer to false', function(){
      var flags = TreeStates.fetchStatusFlags('21101000000000');
      assert.equal(flags.irate_customer, false);
    });

    it('should set notify_customer to false', function(){
      var flags = TreeStates.fetchStatusFlags('21101000000000');
      assert.equal(flags.notify_customer, false);
    });

    it('should set access_issue to false', function(){
      var flags = TreeStates.fetchStatusFlags('21101000000000');
      assert.equal(flags.access_issue, false);
    });

    it('should set refused to false', function(){
      var flags = TreeStates.fetchStatusFlags('21101000000000');
      assert.equal(flags.refused, false);
    });

    it('should not set vehicle_type', function(){
      var flags = TreeStates.fetchStatusFlags('21101000000000');
      assert.equal(flags.vehicle_type, undefined);
    });

    it('should not set environmental', function(){
      var flags = TreeStates.fetchStatusFlags('21101000000000');
      assert.equal(flags.environmental, undefined);
    });
  })
});
