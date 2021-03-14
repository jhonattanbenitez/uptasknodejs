const express = require("express");
const router = express.Router();
//importar express-validator
const { body } = require("express-validator");

//importamos el controlador
const projectsController = require("../controllers/projectsController");

module.exports = function () {
  //ruta para le home
  router.get("/", projectsController.projectsHome);
  router.get("/nuevo-proyecto", projectsController.formularioProyecto);
  router.post(
    "/nuevo-proyecto",
    body("nombre").not().isEmpty().trim().escape(),
    projectsController.nuevoProyecto
  );

  return router;
};
