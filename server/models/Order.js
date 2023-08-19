const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  client: {
    type: String,
    required: [true, 'Please add a client name'],
  },
  ref: {
    type: String,
    required: [true, 'Please add a ref number'],
  },
  date: {
    type: Date,
    default: Date.now,
    get: (val) => {
      if (!val) return val;
      return val.toISOString().substr(0, 10); // Extracts YYYY-MM-DD portion
    },
  },
});

module.exports = mongoose.model('Order', OrderSchema);
