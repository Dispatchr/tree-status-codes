module.exports = {
  statusFlags: {},

  populateWithStatus: function(status){
    switch(status){
      case '2':
        this.statusFlags.status = 'no_trim';
        break;
      case '3':
        this.statusFlags.status = 'not_ready';
        break;
      case '4':
        this.statusFlags.status = 'ready';
        break;
      case '5':
        this.statusFlags.status = 'worked';
        break;
      case '6':
        this.statusFlags.status = 'deleted';
        break;
      default:
        this.statusFlags.status = 'left';
        break;
    }
    return this;
  },

  populateWithSource: function(source){
    switch(source){
      case '1':
        this.statusFlags.source = 'lidar';
        break;
      case '2':
        this.statusFlags.source = 'pi';
        break;
      case '3':
        this.statusFlags.source = 'tc';
        break;
      case '4':
        this.statusFlags.source = 'air';
        break;
      default:
        this.statusFlags.source = 'lidar';
        break;
    }
    return this;
  },

  populateWithPriority: function(priority){
    switch(priority){
      case '1':
        this.statusFlags.priority = 'routine';
        break;
      case '2':
        this.statusFlags.priority = 'accelerate';
        break;
      case '3':
        this.statusFlags.priority = 'immediate';
        break;
      default:
        this.statusFlags.priority = 'routine';
        break;
    }
    return this;
  },

  populateWithVcCodes: function(vc_codes){
    switch(vc_codes){
      case '1':
        this.statusFlags.vc_codes = 'VC1c_URGENT';
        break;
      case '2':
        this.statusFlags.vc_codes = 'VC1c_AF';
        break;
      case '3':
        this.statusFlags.vc_codes = 'VC1c_MO';
        break;
      case '4':
        this.statusFlags.vc_codes = 'VC2c_UH';
        break;
      case '5':
        this.statusFlags.vc_codes = 'VC3c_UH';
        break;
      case '6':
        this.statusFlags.vc_codes = 'VC1p_AF';
        break;
      case '7':
        this.statusFlags.vc_codes = 'VC1p_MO';
        break;
      case '8':
        this.statusFlags.vc_codes = 'VC2c';
        break;
      case '9':
        this.statusFlags.vc_codes = 'VC3c';
        break;
      case 'A':
        this.statusFlags.vc_codes = 'VC2p';
        break;
      case 'B':
        this.statusFlags.vc_codes = 'VC3p';
        break;
    }

    return this;
  },

  populateWithAssigned: function(assigned) {
    this.statusFlags.assigned = assigned === '1' ? true : false;
    return this;
  },

  populateWithDog: function(dog) {
    this.statusFlags.dog = dog === '1' ? true : false;
    return this;
  },

  populateWithIrateCustomer: function(irate_customer) {
    this.statusFlags.irate_customer = irate_customer === '1' ? true : false;
    return this;
  },

  populateWithNotifyCustomer: function(notify_customer) {
    this.statusFlags.notify_customer = notify_customer === '1' ? true : false;
    return this;
  },

  populateWithNtwNeeded: function(ntw_needed) {
    this.statusFlags.ntw_needed = ntw_needed === '1' ? true : false;
    return this;
  },

  populateWithAccessIssue: function(access_issue) {
    this.statusFlags.access_issue = access_issue === '1' ? true : false;
    return this;
  },

  populateWithRefused: function(refused) {
    this.statusFlags.refused = refused === '1' ? true : false;
    return this;
  },

  // This is the same as warning
  populateWithVehicleType: function(vehicle_type) {
    switch(vehicle_type){
      case '1':
        this.statusFlags.vehicle_type = 'lift';
        break;
      case '2':
        this.statusFlags.vehicle_type = 'climb';
        break;
    }
    return this;
  },

  populateWithEnvironmental: function(environment) {
    switch(environment){
      case '1':
        this.statusFlags.environment = 'riparian';
        break;
      case '2':
        this.statusFlags.environment = 'velb';
        break;
      case '3':
        this.statusFlags.environment = 'raptor nest';
        break;
      case '4':
        this.statusFlags.environment = 'other';
        break;
    }
    return this;
  }
};
