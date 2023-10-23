// controllers/users.js
const mongoose = require('mongoose');

const User = require('../models/userModel'); // Asegúrate de que la importación sea correcta

// Controlador para listar todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

// Controlador para obtener un usuario por su ID
exports.getUserById = async (req, res) => {
  const userId = req.params.id; // ID del usuario desde la URL
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

// Controlador para crear un nuevo usuario
exports.createUser = async (req, res) => {
  const { username, brandMember } = req.body; // Datos del usuario desde el cuerpo de la solicitud

  try {
    // Asegúrate de que brandMember sea un ID válido de una marca
    if (!brandMember || !mongoose.Types.ObjectId.isValid(brandMember)) {
      return res.status(400).json({ error: 'ID de marca no válido' });
    }

    // Crea un nuevo usuario con la marca asociada
    const user = new User({ username, brandMember: brandMember }); // Asegúrate de asignar la referencia correctamente
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el usuario' });
  }
};

// Controlador para eliminar un usuario por su ID
exports.deleteUser = async (req, res) => {
  const userId = req.params.id; 

  try {
    const user = await User.findByIdAndRemove(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }

}