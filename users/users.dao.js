const { v4: uuidv4 } = require("uuid");
const User = require('./users.entity');
const Order = require('../orders/orders.entity'); // assuming orders.entity is where Order model is defined

const saveUser = async (userData) => {
  try {
    const user = new User({
      UserId: uuidv4(),
      UserName: userData.userName,
      Email: userData.email
    });
    return await user.save();
  } catch (err) {
    throw err;
  }
};

const findUsers = async () => {
  try {
    return await User.find();
  } catch (err) {
    throw err;
  }
};

const getUserByEmail = async (email) => {
  try {
    return await User.findOne({ Email: email });
  } catch (err) {
    throw err;
  }
};

const getUserById = async (userId) => {
  try {
    return await User.findOne({ UserId: userId });
  } catch (err) {
    throw err;
  }
};

const updateUserDetails = async (userId, updateReq) => {
  try {
    return await User.findOneAndUpdate({ UserId: userId }, updateReq, { new: true });
  } catch (err) {
    throw err;
  }
};


const findOrdersPlacedByUser = async (userId) => {
  try {
    return await Order.find({ UserId: userId });
  } catch (err) {
    throw err;
  }
}

module.exports = {
  saveUser,
  findUsers,
  getUserByEmail,
  getUserById,
  updateUserDetails,
  findOrdersPlacedByUser
};
