# ApiSneakersStore
# API Sneakers Store

Bienvenido a la documentación de la API Sneakers Store. Esta API permite gestionar productos, usuarios y precios de productos para una tienda de zapatillas.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Configuración](#configuración)
- [Endpoints](#endpoints)
  - [Usuarios](#usuarios)
  - [Productos](#productos)
- [Ejemplos de Uso](#ejemplos-de-uso)
- [Contribuyendo](#contribuyendo)

## Requisitos

Antes de comenzar a utilizar esta API, asegúrate de tener instalado lo siguiente:

- Node.js
- MongoDB
- npm o yarn
- Postman (opcional, para probar los endpoints)

## Configuración

1. Clona este repositorio: `git clone https://github.com/tuusuario/ApiSneakersStore.git`
2. Instala las dependencias: `npm install` o `yarn install`
3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias (puerto, conexión a la base de datos, etc.).
4. Inicia la API: `npm start` o `yarn start`o  `npm run dev`

## Endpoints

### Usuarios

- `GET /users`: Obtiene una lista de todos los usuarios.
- `GET /users/:id`: Obtiene un usuario por su ID.
- `POST /users`: Crea un nuevo usuario. Debes enviar un JSON con `username` y `brandMember` (ID de la marca).

### Productos

- `GET /products`: Obtiene una lista de todos los productos en stock.
- `GET /products/:id`: Obtiene un producto por su ID.
- `POST /products`: Crea un nuevo producto. Debes enviar un JSON con `name`, `brand`, `basePrice`, `specialPrice`, `inStock` y `quantity`.

### Precio de Productos

- `GET /price/:user_id/:productName`: Obtiene el precio de un producto para un usuario específico.

### Link del despliegue
https://prueba-oj27u2fq6-jonathanvg97.vercel.app/


