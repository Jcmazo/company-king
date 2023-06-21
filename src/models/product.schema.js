const mongoose = require('mongoose');

const PRODUCTS_SCHEMA = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Products', PRODUCTS_SCHEMA);