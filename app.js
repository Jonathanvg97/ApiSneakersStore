// app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db'); 
const routesProduct = require('./routes/productRoutes');
const routesUser = require('./routes/userRoutes')

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para analizar solicitudes JSON
app.use(express.json());

app.use(cors());

// Rutas
app.use('/api', routesProduct);
app.use('/api', routesUser);

app.get("/", (req, res) => {
  res.send("Hola desde el servidor");
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
