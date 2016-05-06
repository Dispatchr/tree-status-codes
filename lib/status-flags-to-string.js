
module.exports = {
  statusCode: [],

  getStatus: function(status){
    status = status || 'left'; //if undefined then use left
    switch(status){
      case 'no_trim':
        this.statusCode[0] = 2;
        break;
      case 'not_ready':
        this.statusCode[0] = 3;
        break;
      case 'ready':
        this.statusCode[0] = 4;
        break;
      case 'worked':
        this.statusCode[0] = 5;
        break;
      case 'deleted':
        this.statusCode[0] = 6;
        break;
      case 'left':
      case 'newTree':
      case 'incomplete':
        this.statusCode[0] = 1;
        break;
      default:
        console.error("unknown tree status", status);
        this.statusCode[0] = 0;
        break;
    }
    return this;
  },
  getSource: function(source){
    switch(source){
      case 'lidar':
        this.statusCode[1] = 1;
        break;
      case 'pi':
        this.statusCode[1] = 2;
        break;
      case 'tc':
        this.statusCode[1] = 3;
        break;
      case 'air':
        this.statusCode[1] = 4;
        break;
      default:
        this.statusCode[1] = 1;
        break;
    }
    return this;
  },

  getPriority: function(priority){
    switch(priority){
      case 'routine':
        this.statusCode[2] = 1;
        break;
      case 'accelerate':
        this.statusCode[2] = 2;
        break;
      case 'immediate':
        this.statusCode[2] = 3;
        break;
      case 'allgood':
        this.statusCode[2] = 4;
        break;
      default:
        this.statusCode[2] = 1;
        break;
    }
    return this;
  },

  getVcCodes: function(vc_codes){
    switch(vc_codes){
      case 'VC1c_URGENT':
        this.statusCode[3] = 1;
        break;
      case 'VC1c_AF':
        this.statusCode[3] = 2;
        break;
      case 'VC1c_MO':
        this.statusCode[3] = 3;
        break;
      case 'VC2c_UH':
        this.statusCode[3] = 4;
        break;
      case 'VC3c_UH':
        this.statusCode[3] = 5;
        break;
      case 'VC1p_AF':
        this.statusCode[3] = 6;
        break;
      case 'VC1p_MO':
        this.statusCode[3] = 7;
        break;
      case 'VC2c':
        this.statusCode[3] = 8;
        break;
      case 'VC3c':
        this.statusCode[3] = 9;
        break;
      case 'VC2p':
        this.statusCode[3] = 'A';
        break;
      case 'VC3p':
        this.statusCode[3] = 'B';
        break;
      default:
        this.statusCode[3] = 0;
        break;
    }

    return this;
  },

  getAssigned: function(cuf_id) {
    this.statusCode[4] = cuf_id ? 1 : 0;
    return this;
  },

  getDog: function(dog) {
    this.statusCode[5] = dog ? 1 : 0;
    return this;
  },

  getIrateCustomer: function(irate_customer) {
    this.statusCode[6] = irate_customer ? 1 : 0;
    return this;
  },

  getNotifyCustomer: function(notify_customer) {
    this.statusCode[7] = notify_customer ? 1 : 0;
    return this;
  },

  getNtwNeeded: function(ntw_needed) {
    this.statusCode[8] = ntw_needed ? 1 : 0;
    return this;
  },

  getAccessIssue: function(access_issue) {
    this.statusCode[9] = access_issue ? 1 : 0;
    return this;
  },

  getRefused: function(refused) {
    this.statusCode[10] = refused ? 1 : 0;
    return this;
  },

  getVehicleType: function(vehicle_type) {
    switch(vehicle_type){
      case 'lift':
        this.statusCode[11] = 1;
        break;
      case 'climb':
        this.statusCode[11] = 2;
        break;
      default:
        this.statusCode[11] = 0;
        break;
    }
    return this;
  },

  getEnvironmental: function(environment) {
    switch(environment){
      case 'riparian':
        this.statusCode[12] = 1;
        break;
      case 'velb':
        this.statusCode[12] = 2;
        break;
      case 'raptor nest':
        this.statusCode[12] = 3;
        break;
      case 'other':
        this.statusCode[12] = 4;
        break;
      default:
        this.statusCode[12] = 0;
    }
    return this;
  }
};
