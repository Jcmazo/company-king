const mongoose = require('mongoose');

const EMPLOYEE_SCHEMA = mongoose.Schema({
  name:{
    type: String,
    required:true
  },
  email:{
    type: String,
    required:true
  },
  age:{
    type: String,
    required:true
  }
});

module.exports = mongoose.model('Employee', EMPLOYEE_SCHEMA);