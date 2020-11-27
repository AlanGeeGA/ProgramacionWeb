/*
ALUMNO: ALAN GERARDO GARCIA AISPURO
EXAMEN UNIDAD 3 Y 4
*/

const express = require('express');
const routes = express.Router();

// Importando el controlador de personas
const personasController = require('../controllers/personasController');

// Rutas

routes.get('/', personasController.listar);

routes.get('/:id', personasController.obtenerPersona);

routes.post('/', personasController.crear);

routes.put('/:id', personasController.editar);

routes.delete('/:id', personasController.eliminar);

module.exports = routes;