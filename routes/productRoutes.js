// routes/app.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para ver los productos que estan en stock
router.get('/products', productController.getProducts);
// Ruta para obtener el precio de un producto
router.get('/price/:user_id/:productName', productController.getPrice);
// Ruta para agregar un producto
router.post('/products', productController.createProduct);
// Ruta para eliminar un producto por su ID
router.delete('/products/:id', productController.deleteProduct);


module.exports = router;
