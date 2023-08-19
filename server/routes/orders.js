const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const {
  getAllOrders,
  getOrderById,
  addNewOrder,
  updateOrderById,
  deleteOrderById,
} = require('../controllers/orderController');

// @desc route /api/orders

// get all orders
router.get('/', getAllOrders);

// get single order
router.get('/:id', getOrderById);

// add an order
router.post('/', addNewOrder);

// update an order
router.put('/:id', updateOrderById);

// delete an order
router.delete('/:id', deleteOrderById);

module.exports = router;
