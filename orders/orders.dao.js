const { v4: uuidv4 } = require("uuid");
const Order = require("./orders.entity");

/* 
  saveOrder should be a function that calls the save() function on Orders Model 
  to persist order data in MongoDB Orders collection of shoppingcartDB
*/
const saveOrder = async function (orderReq) {
  try {
    const order = new Order({
      OrderId: uuidv4(),
      OrderName: orderReq.orderName,
      ProductId: orderReq.productId,
      ProductName: orderReq.productName,
      UserId: orderReq.userId,
      UserName: orderReq.userName,
      UnitsPlaced: orderReq.unitsPlaced,
    });

    const savedOrder = await order.save();
    return savedOrder;
  } catch (err) {
    throw err;
  }
};

/* 
  findOrdersPlacedByUser should be a function that calls the find() function on Orders Model 
  to fetch all documents from Orders collection of shoppingcartDB,
  containing data of Orders for a given UserId
*/
const findOrdersPlacedByUser = async function (userId) {
  try {
    const orders = await Order.find({ UserId: userId });
    return orders;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  saveOrder,
  findOrdersPlacedByUser
};
