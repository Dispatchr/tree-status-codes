const bases = require('bases');
const combinator = require('js-combinatorics');
const base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const _ = require('underscore');

const STATUS_BIT_TREE = {
  assigned:        { base64: 'AB', binary: '1' },
  dog:             { base64: 'AC', binary: '10' },
  irate_customer:  { base64: 'AE', binary: '100' },
  notify_customer: { base64: 'AI', binary: '1000' },
  environment:     { base64: 'AQ', binary: '10000' },
  ntw_needed:      { base64: 'Ag', binary: '100000' },
  access_issue:    { base64: 'BA', binary: '1000000' },
  refused:         { base64: 'CA', binary: '10000000' },
  bucket:          { base64: 'EA', binary: '100000000' },
  reserved1:       { base64: 'IA', binary: '1000000000' },
  reserved2:       { base64: 'QA', binary: '10000000000' },
  reserved3:       { base64: 'gA', binary: '100000000000' }
};

var combinations = [];
var hashTree = { base64: {}, binary: {} };

function getCombs() {
  if(combinations.length > 0) {
    return combinations;
  };

  combinations = combinator.baseN(base64.split(''), 2).toArray();
  combinations = _.map(combinations, (comb) => comb.reverse().join(''));
  return combinations;
}
module.exports = {

  hashTree: function() {
    if(hashTree.base64.length > 0 && hashTree.binary.length > 0){
      return hashTree;
    }

    var combinations = getCombs();

    for(var i = 0; i < combinations.length; i++) {
      hashTree.base64[combinations[i]] = bases.toBase2(i);
      hashTree.binary[bases.toBase2(i)] = combinations[i];
    }

    return hashTree;
  },

  mixCodes: function(codes){
    var binaryCodes = [];
    var base64ToBinary = this.hashTree().base64;
    var binaryToBase64 = this.hashTree().binary;
    binaryCodes = _.map(codes, (code) => base64ToBinary[code]);
    var resultBinary = _.reduce(binaryCodes, (sum, bin) => sum | bin, 0)

    return binaryToBase64[resultBinary];
  },

  includes: function(status, code) {
    var base64ToBinary = this.hashTree().base64;
    var binaryToBase64 = this.hashTree().binary;
    var includes = base64ToBinary[status] & base64ToBinary[code];
    return includes !== 0;
  },

  codes: STATUS_BIT_TREE
};
