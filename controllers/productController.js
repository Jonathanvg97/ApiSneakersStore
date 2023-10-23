const Product = require('../models/productModel');
const User = require('../models/userModel');
const Brand = require('../models/brandModel');

// Obtener todos los productos en stock
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({ inStock: true });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
  try {
    const { name, brand, basePrice, specialPrice, inStock,quantity } = req.body;
    const newProduct = new Product({
      name,
      brand,
      basePrice,
      specialPrice,
      inStock,
      quantity
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(`Error al crear el producto: ${error}`);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

// Controlador para obtener el precio del producto
exports.getPrice = async (req, res) => {
  const { user_id, productName } = req.params;

  try {
    // Buscar el producto por su nombre
    const product = await Product.findOne({ name: productName });
    // console.log('Producto encontrado:', product);

    if (!product) {
      // console.log('Producto no encontrado');
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // Verificar si hay unidades disponibles (quantity > 0)
    if (product.quantity <= 0) {
      return res.json({ message: 'En estos momentos no tenemos unidades disponibles' });
    }

    let specialPrice = product.basePrice;

    if (user_id) {
      // Buscar al usuario por su ID
      const user = await User.findById(user_id);
      // console.log('Usuario encontrado:', user);

      if (user) {
        if (user.brandMember) {
          // console.log('Brand Member del usuario:', user.brandMember);
          // console.log('ID de la marca del producto:', product.brand.toString());

          if (user.brandMember.toString() === product.brand.toString()) {
            // Compara los ID de la marca
            specialPrice = product.specialPrice;
            // console.log('Precio especial aplicado:', specialPrice);
          }
        } else {
          console.log('Brand Member del usuario es nulo');
        }
      } else {
        // console.log('Usuario no encontrado');
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
    }

    res.json({ price: specialPrice });
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({ error: 'Error al obtener el precio' });
  }
};


// Controlador para eliminar un producto por su ID
exports.deleteProduct = async (req, res) => {
  const productId = req.params.id; // ID del producto desde la URL

  try {
    const product = await Product.findByIdAndRemove(productId);

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};