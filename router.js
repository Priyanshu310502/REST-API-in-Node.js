const express = require('express');
const router = express.Router();
const { ProductController } = require('./controller');


router.post('/create', ProductController.createProduct);

router.get('/retrieve-all', ProductController.getProducts);

router.get('/retrieve/:id', ProductController.getProductById);

router.put('/update/:id', ProductController.updateProduct);

router.delete('/delete/:id', ProductController.deleteProduct);

module.exports = { router };
