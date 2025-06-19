const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  customerName: String,
  items: [{ title: String, quantity: Number, price: Number }],
  total: Number,
  date: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending' }
});
module.exports = mongoose.model('Order', orderSchema);