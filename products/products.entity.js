const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  ProductId: {
    type: String,
    required: true,
    unique: true
  },
  ProductName: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true,
    default: ''
  },
  Price: {
    type: Number,
    required: true,
    default: 0
  },
  UnitsAvailable: {
    type: Number,
    required: true,
    default: 0
  },
  Tags: {
    type: [String],
    required: true
  },
  Category: {
    type: String,
    required: true
  },
  UpdatedOn: {
    type: Date,
    required: true,
    default: Date.now
  },
  UpdatedBy: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', ProductSchema);
