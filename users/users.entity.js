const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: true,
    unique: true
  },
  UserName: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  OrdersPlaced: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model('User', UserSchema);
