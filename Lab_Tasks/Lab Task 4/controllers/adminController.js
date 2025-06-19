const Product = require('../models/Product');
const Order = require('../models/Order');

exports.listProducts = async (req, res) => {
  const products = await Product.find();
  res.render('admin/listProducts', { products });
};

exports.getAddProduct = (req, res) => {
  res.render('admin/addProduct');
};

exports.postAddProduct = async (req, res) => {
  await Product.create(req.body);
  res.redirect('/admin/products');
};

exports.getEditProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('admin/editProduct', { product });
};

exports.postEditProduct = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/admin/products');
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/admin/products');
};

exports.viewOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.render('admin/orders', { orders });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.updateOrderStatus = async (req, res) => {
  await Order.findByIdAndUpdate(req.params.id, { status: req.body.status });
  res.redirect('/admin/orders');
};