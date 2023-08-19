const express = require('express');
const router = express.Router();

// sample data
const orders = [
  {
    id: 1,
    client: 'client 1',
    ref: 'ref 1',
    date: 'date 1',
  },
  {
    id: 2,
    client: 'client 2',
    ref: 'ref 2',
    date: 'date 2',
  },
  {
    id: 3,
    client: 'client 3',
    ref: 'ref 3',
    date: 'date 3',
  },
];

// route /api/orders

// get all orders
router.get('/', (req, res) => {
  res.json({ success: true, data: orders });
});

// get single order
router.get('/:id', (req, res) => {
  // finds the order that matches the req params and parses as a number using +
  const order = orders.find((order) => order.id === +req.params.id);

  // if there is no order with that id
  if (!order) {
    res.status(404).json({ success: false, error: 'Order not found' });
  }

  res.json({ success: true, data: order });
});

// add an order
router.post('/', (req, res) => {
  const order = {
    id: orders.length + 1,
    client: req.body.client,
    ref: req.body.ref,
    date: new Date().toISOString().slice(0, 10),
  };

  orders.push(order);

  res.json({ succcess: true, data: order });
});

// update an order
router.put('/:id', (req, res) => {
  // finds the order that matches the req params and parses as a number using +
  const order = orders.find((order) => order.id === +req.params.id);

  // if there is no order with that id
  if (!order) {
    res.status(404).json({ success: false, error: 'Order not found' });
  }

  // update the fields
  order.client = req.body.client || order.client;
  order.ref = req.body.ref || order.ref;

  res.json({ success: true, data: order });
});

// delete an order
router.delete('/:id', (req, res) => {
  // finds the order that matches the req params and parses as a number using +
  const order = orders.find((order) => order.id === +req.params.id);

  // if there is no order with that id
  if (!order) {
    res.status(404).json({ success: false, error: 'Order not found' });
  }

  // delete the order by finding the index of the matching id
  const index = orders.indexOf(order);
  // splice the single index
  orders.splice(index, 1);

  res.json({ success: true, data: 'Order deleted' });
});

module.exports = router;
