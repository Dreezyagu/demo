const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const isAuthenticated = require('../middleware/is-auth');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', isAuthenticated, shopController.getCart);

router.post('/cart', isAuthenticated,  shopController.postCart);

router.post('/cart-delete-item', isAuthenticated,  shopController.postCartDeleteProduct);

router.post('/create-order', isAuthenticated,  shopController.postOrder);

router.get('/orders', isAuthenticated, shopController.getOrders);

module.exports = router;
