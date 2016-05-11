const StatusFlagsToString = require('./lib/status-flags-to-string');
const StatusStringToFlags = require('./lib/status-string-to-flags');

module.exports = {

  tree_inspect: function() {
    return new RegExp(/^[1,3]/);
  },

  tree_trim: function() {
    return new RegExp(/^[4]/);
  },

  fetchStatusCode: function(source) {
    // Pipes status code one after another to avoid positioning issues
    var statusFlagsToString = new StatusFlagsToString();
    statusFlagsToString.getStatus(source.status)
    .getSource(source.source)
    .getPriority(source.priority)
    .getVcCodes(source.vc_codes)
    .getAssigned(source.assigned)
    .getDog(source.dog)
    .getIrateCustomer(source.irate_customer)
    .getNotifyCustomer(source.notify_customer)
    .getNtwNeeded(source.ntw_needed)
    .getAccessIssue(source.access_issue)
    .getRefused(source.refused)
    .getVehicleType(source.vehicle_type)
    .getEnvironmental(source.environment)

    return statusFlagsToString.statusCode.join('');
  },

  fetchStatusFlags: function(status) {
    var statusStringToFlags = new StatusStringToFlags();
    statusStringToFlags.populateWithStatus(status[0])
    .populateWithSource(status[1])
    .populateWithPriority(status[2])
    .populateWithVcCodes(status[3])
    .populateWithAssigned(status[4])
    .populateWithDog(status[5])
    .populateWithIrateCustomer(status[6])
    .populateWithNotifyCustomer(status[7])
    .populateWithNtwNeeded(status[8])
    .populateWithAccessIssue(status[9])
    .populateWithRefused(status[10])
    .populateWithVehicleType(status[11])
    .populateWithEnvironmental(status[12])

    return statusStringToFlags.statusFlags;
  }
};
