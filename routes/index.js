const express = require("express");
const router = express.Router();

//importamos el controlador 
const projectsController = require('../controllers/projectsController') 

module.exports = function () {
  //ruta para le home
  router.get('/', projectsController.projectsHome);
  router.get('/nuevo-proyecto', projectsController.formularioProyecto)
  router.post('/nuevo-proyecto', projectsController.nuevoProyecto)
 
  return router;
};


