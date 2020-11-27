const express = require('express');
const routes = express.Router();

// Importando el controlador de personas
const librosController = require('../controllers/librosController');

// Rutas

routes.get('/', librosController.listar);

routes.get('/:id', librosController.obtenerLibro);

routes.post('/', librosController.crear);

module.exports = routes;