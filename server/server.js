const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5003;
const connectDB = require('./config/db');

connectDB();

const app = express();

// body parder middleware to send raw json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my freelance app' });
});

const ordersRouter = require('./routes/orders');
app.use('/api/orders', ordersRouter);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
