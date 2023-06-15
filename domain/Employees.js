const mongoose = require('mongoose');

const EMPLOYEES_SCHEMA = mongoose.Schema({
  name:{
    type: String,
    required:true
  },
  age:{
    type: String,
    required:true
  },
  email:{
    type: String,
    required:true
  }
});

module.exports = mongoose.model('Employees',EMPLOYEES_SCHEMA);