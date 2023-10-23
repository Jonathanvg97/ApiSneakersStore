// config/database.js

const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`Error de conexión a la base de datos: ${err}`);
});

db.once('open', () => {
  console.log('Conexión exitosa a la base de datos');
});

module.exports = db;
