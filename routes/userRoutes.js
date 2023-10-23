// routes/users.js

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

// Ruta para listar todos los usuarios
router.get('/users', usersController.getAllUsers);

// Ruta para obtener un usuario por su ID
router.get('/users/:id', usersController.getUserById);

// Ruta para crear un nuevo usuario
router.post('/users', usersController.createUser);

// Ruta para eliminar un usuario por su ID
router.delete('/users/:id', usersController.deleteUser);

module.exports = router;
