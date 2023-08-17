const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5003;

const app = express();

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

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my freelance app' });
});

// get all orders
app.get('/api/orders', (req, res) => {
  res.json({ success: true, data: orders });
});

// get single order
app.get('/api/orders/:id', (req, res) => {
  // finds the order that matches the req params and parses as a number using +
  const order = orders.find((order) => order.id === +req.params.id);

  // if there is no order with that id
  if (!order) {
    res.status(404).json({ success: false, error: 'Order not found' });
  }

  res.json({ success: true, data: order });
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
