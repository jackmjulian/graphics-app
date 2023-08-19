const asyncHandler = require('express-async-handler');
const Order = require('../models/Order');

// @desc get all orders
// route GET /api/orders
const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find(); // find all orders
    res.json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Seomthing went wrong' });
  }
});

// @desc get order by id
// route GET /api/orders/:id
const getOrderById = asyncHandler(async (req, res) => {
  try {
    const order = await Order.findById(req.params.id); // find the order by id // Make sure to await the response
    res.json({ success: true, data: order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Seomthing went wrong' });
  }
});

// @desc add new order
// route POST /api/orders
const addNewOrder = asyncHandler(async (req, res) => {
  const order = new Order({
    client: req.body.client,
    ref: req.body.ref,
  });

  try {
    const savedOrder = await order.save(); // save the new order to the datbase
    res.json({ succcess: true, data: savedOrder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Order not added' });
  }
});

// @desc update order
// route POST /api/orders/:id
const updateOrderById = asyncHandler(async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        // set is the selected data that will be 'set' as the updated order
        $set: {
          client: req.body.client,
          ref: req.body.ref,
        },
      },
      { new: false } // if the order doesn't exist do not create a new one
    );
    res.json({ success: true, data: 'Order has been updated' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Seomthing went wrong' });
  }
});

// @desc delete order
// route DELETE /api/orders/:id
const deleteOrderById = asyncHandler(async (req, res) => {
  try {
    const deleteOrder = await Order.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: 'Order has been deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Seomthing went wrong' });
  }
});

module.exports = {
  getAllOrders,
  getOrderById,
  addNewOrder,
  updateOrderById,
  deleteOrderById,
};
