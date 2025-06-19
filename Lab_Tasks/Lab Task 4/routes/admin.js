const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { requireLogin, requireAdmin } = require('../middlewares/authMiddleware');

router.use(requireLogin, requireAdmin);

router.get('/products', adminController.listProducts);
router.get('/products/add', adminController.getAddProduct);
router.post('/products/add', adminController.postAddProduct);
router.get('/products/edit/:id', adminController.getEditProduct);
router.post('/products/edit/:id', adminController.postEditProduct);
router.post('/products/delete/:id', adminController.deleteProduct);
router.get('/orders', adminController.viewOrders);
router.post('/orders/status/:id', adminController.updateOrderStatus);

module.exports = router;