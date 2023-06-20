const mongoose = require('mongoose');

const BRANCHES_SCHEMA = mongoose.Schema({
  name:{
    type: String,
    required:true
  },
  location:{
    type: String,
    required:true
  },
  contact:{
    type: String,
    required:true
  },
  services:{
    type: String,
    required:true
  }
});

module.exports = mongoose.model('Branches', BRANCHES_SCHEMA);